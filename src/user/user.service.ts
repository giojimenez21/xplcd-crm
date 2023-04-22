import bcrypt from "bcryptjs";
import { Op } from "sequelize";

import { ErrorService } from "../common";
import { generateToken } from "./helpers";
import { Location, Role, User } from "./models";
import { toUserEntityWithToken, toUserEntityWithoutToken } from "./adapters/toUser";
import { IUserservice, UserToRegister, UserEntity, UserWithRoleAndLocation, RoleModel, LocationModel } from "./interface";

export class UserService implements IUserservice {
    async createUser(user: UserToRegister): Promise<UserEntity> {
        const userExist = await this.existUser(user.userName);

        if (userExist) {
            throw new ErrorService(400, "El usuario ya existe.");
        }

        const salt = bcrypt.genSaltSync(10);
        const passwordEncrypted = bcrypt.hashSync(user.password, salt);
        const userToCreate = await User.create({
            ...user,
            password: passwordEncrypted,
            isActive: true,
            isVerify: false,
        });

        const userCreated = await this.findUserById(userToCreate.id);
        const token = await generateToken(userCreated.id, userCreated.userName, userCreated.role.name);
        return toUserEntityWithToken(userCreated, token);
    }

    async findUserById(id: number): Promise<UserWithRoleAndLocation> {
        const userFind = (await User.findByPk(id, {
            attributes: {
                exclude: ["password", "createdAt", "updatedAt"],
            },
            include: [
                {
                    model: Role,
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                },
                {
                    model: Location,
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                },
            ],
        })) as UserWithRoleAndLocation;

        if (!userFind) {
            throw new ErrorService(
                404,
                "No se encontro ningun usuario con ese id."
            );
        }

        return userFind;
    }

    async findUserByUserName(userName: string): Promise<UserWithRoleAndLocation> {
        const userFind = (await User.findOne({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
            include: [
                {
                    model: Role,
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                },
                {
                    model: Location,
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                },
            ],
            where: {
                [Op.and]: [
                    { userName },
                    { userName: { [Op.ne]: process.env.USER_ADMIN! } },
                ],
            },
        })) as UserWithRoleAndLocation;

        if (!userFind) {
            throw new ErrorService(
                404,
                "No existe ningún usuario con ese userName"
            );
        }

        return userFind;
    }

    async login(userName: string, password: string): Promise<UserEntity> {
        const userFind = await this.findUserByUserName(userName);
        if (!userFind) {
            throw new ErrorService(
                404,
                "No existe ningun usuario con ese userName."
            );
        }
        const passwordIsCorrect = await bcrypt.compare(
            password,
            userFind.password!
        );

        if (!passwordIsCorrect) {
            throw new ErrorService(401, "Datos incorrectos.");
        }

        const token = await generateToken(userFind.id, userFind.userName, userFind.role.name);

        return toUserEntityWithToken(userFind, token);
    }

    async renewToken(userName: string): Promise<UserEntity> {
        const userFind = await this.findUserByUserName(userName);
        const token = await generateToken(userFind.id, userName, userFind.role.name);

        return toUserEntityWithToken(userFind, token);
    }

    async existUser(userName: string): Promise<boolean> {
        const userExist = await User.findOne({ where: { userName } });
        return userExist ? true : false;
    }

    async verifyUser(userName: string, password: string, newPassword: string): Promise<string> {
        const userFind = await this.findUserByUserName(userName);
        const passwordIsCorrect = bcrypt.compareSync(password, userFind.password!);
        
        if(!passwordIsCorrect) {
            throw new ErrorService(401, "Datos incorrectos.");
        }

        if(userFind.isVerify) {
            throw new ErrorService(400, "Este usuario ya esta verificado.")
        }
        const salt = bcrypt.genSaltSync(10);
        const newPasswordHash = bcrypt.hashSync(newPassword, salt);
        await userFind.update({
            password: newPasswordHash,
            isVerify: true,
        });

        return "Usuario verificado.";
    }

    async changeUserStatus(id: number): Promise<string> {
        const userToChangeStatus = await this.findUserById(id);
        await userToChangeStatus.update({
            isActive: userToChangeStatus.isActive ? false : true
        });
        return userToChangeStatus.isActive ? "El usuario fue reactivado." : "El usuario fue dado de baja.";
    }

    async findAllRoles(): Promise<RoleModel[]> {
        const roles = await Role.findAll();
        return roles;
    }

    async findAllLocations(): Promise<LocationModel[]> {
        const locations = await Location.findAll();
        return locations;
    }

    async getUsers(page: number = 1): Promise<UserEntity[]> {
        const sizePagination = +process.env.SIZE_PAGINATION!;
        const userAdmin = process.env.USER_ADMIN;
        const users = (await User.findAll({
            include: [
                {
                    model: Role,
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                },
                {
                    model: Location,
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                },
            ],
            where: {
                userName: {
                    [Op.ne]: userAdmin,
                },
            },
            limit: sizePagination,
            offset: page === 1 ? 0 : sizePagination * (page - 1)
        })) as UserWithRoleAndLocation[];

        return users.map(user => toUserEntityWithoutToken(user))
    }

    async createUserAdmin(): Promise<void> {
        const userAdminExist = await this.existUser(process.env.USER_ADMIN!);
        if(!userAdminExist) {
            await User.create({
                firstName: process.env.USER_ADMIN!,
                lastName: process.env.USER_ADMIN!,
                userName: process.env.USER_ADMIN!,
                password: process.env.PASSWORD_ADMIN!,
                idLocation: 1,
                idRole: 1,
                isVerify: true,
                isActive: true,
            });
        }
    }
}
