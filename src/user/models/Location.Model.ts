import { DataTypes, Model } from "sequelize";

import { db } from "../../common/db";
import { LocationModel } from "../interface";

export const Location = db.define<LocationModel>(
    "locations",
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
