import { DataTypes } from "sequelize";
import { db } from "../../common/db";
import { RoleModel } from "../interface";


export const Role = db.define<RoleModel>(
    "roles",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
        },
    },
    {
        timestamps: true,
        freezeTableName: true,
    }
);
