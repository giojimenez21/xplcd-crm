import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface LocationModel extends Model<InferAttributes<LocationModel>, InferCreationAttributes<LocationModel>> {
    id: CreationOptional<number>;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}