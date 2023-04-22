import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { RoleModel } from "./roleModel.interface";
import { LocationModel } from "./locationModel.interface";

export interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    id: CreationOptional<number>;
    firstName: string;
    lastName: string;
    userName: string;
    password?: string;
    idLocation?: number;
    idRole?: number;
    isActive: boolean;
    isVerify: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserWithRoleAndLocation extends UserModel {
    role : RoleModel;
    location: LocationModel;
}

export interface UserEntity {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    idLocation: number;
    nameLocation: string;
    idRole: number;
    nameRole: string;
    isActive: boolean;
    isVerify: boolean;
    token?: string;
}

export interface UserToRegister {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    idLocation: number;
    idRole: number;
}