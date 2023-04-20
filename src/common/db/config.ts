import { Sequelize } from "sequelize";

export const db = new Sequelize(
    process.env.DB!,
    process.env.USER_DB!,
    process.env.PASSWORD_DB!,
    {
        host: process.env.HOST_DB,
        port: process.env.PORT_DB as number | undefined,
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        define: {
            timestamps: false,
        },
        logging: false,
    }
);
