import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface RoleModel extends Model<InferAttributes<RoleModel>, InferCreationAttributes<RoleModel>> {
    id: CreationOptional<number>;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}