import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import { db } from "./common/db";
import { UserService, routerUser } from "./user";


const app = express();
const userService = new UserService();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/user", routerUser)

db.authenticate().then(() => console.log("DB sync online."));
app.listen(PORT, () => console.log(`Listen in port: ${PORT}`));
userService.createUserAdmin()
    .then(() => console.log("User admin created."))
    .catch((e) => console.log(e.message));
