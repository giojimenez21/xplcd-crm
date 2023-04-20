import { DataTypes } from "sequelize";
import { db } from "../../common/db";
import { UserModel } from "../interface";
import { Role } from "./Role.model";
import { Location } from "./Location.Model";


export const User = db.define<UserModel>(
    "users",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        userName: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        idLocation: {
            type: DataTypes.INTEGER,
        },
        idRole: {
            type: DataTypes.INTEGER,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
        },
        isVerify: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);

User.belongsTo(Role, { foreignKey: "idRole" });
User.belongsTo(Location, { foreignKey: "idLocation" });
