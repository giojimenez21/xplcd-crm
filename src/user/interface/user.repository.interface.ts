import { UserModel, UserEntity, UserWithRoleAndLocation, UserToRegister } from "./userModel.interface";

export interface IUserservice {
    findUserById(id: number): Promise<UserModel>;
    existUser(userName: string): Promise<boolean>;
    renewToken(userName: string): Promise<UserEntity>;
    createUser(user: UserToRegister): Promise<UserEntity>;
    login(userName: string, password: string): Promise<UserEntity>;
    findUserByUserName(userName: string): Promise<UserWithRoleAndLocation>;
    verifyUser(userName: string, password: string, newPassword: string): Promise<string>;
}