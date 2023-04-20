import bcrypt from "bcryptjs";

import { generateToken } from "./helpers";
import { Location, Role, User } from "./models";
import { IUserservice, UserToRegister, UserEntity, UserWithRoleAndLocation } from "./interface";
import { ErrorService } from "../common";
import { toUserEntity } from "./adapters/toUser";

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
        return toUserEntity(userCreated, token);
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
            where: { userName },
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

        return toUserEntity(userFind, token);
    }

    async renewToken(userName: string): Promise<UserEntity> {
        const userFind = await this.findUserByUserName(userName);
        const token = await generateToken(userFind.id, userName, userFind.role.name);

        return toUserEntity(userFind, token);
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
}
