import { LocationModel } from "./locationModel.interface";
import { RoleModel } from "./roleModel.interface";
import { UserModel, UserEntity, UserWithRoleAndLocation, UserToRegister } from "./userModel.interface";

export interface IUserservice {
    createUserAdmin(): Promise<void>;
    findAllRoles(): Promise<RoleModel[]>;
    findAllLocations(): Promise<LocationModel[]>
    findUserById(id: number): Promise<UserModel>;
    getUsers(page: number): Promise<UserEntity[]>;
    existUser(userName: string): Promise<boolean>;
    changeUserStatus(id: number): Promise<string>;
    renewToken(userName: string): Promise<UserEntity>;
    createUser(user: UserToRegister): Promise<UserEntity>;
    login(userName: string, password: string): Promise<UserEntity>;
    findUserByUserName(userName: string): Promise<UserWithRoleAndLocation>;
    verifyUser(userName: string, password: string, newPassword: string): Promise<string>;
}