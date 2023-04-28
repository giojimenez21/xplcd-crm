import { Router } from "express";

import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { validateRoles, verifyToken } from "./middlewares";
import {
    validatorLogin,
    validatorRegister,
    validatorVerifyUser,
} from "./validators";
import { validationResultErros } from "../common";

export const routerUser = Router();

const userService = new UserService();

const userCtrl = new UserController(userService);

routerUser.post(
    "/login",
    validatorLogin,
    validationResultErros,
    userCtrl.login
);

routerUser.post(
    "/register",
    verifyToken,
    validateRoles("ADMIN"),
    validatorRegister,
    validationResultErros,
    userCtrl.registerUser
);

routerUser.get("/renew", verifyToken, userCtrl.renewToken);

routerUser.put(
    "/verifyUser",
    verifyToken,
    validatorVerifyUser,
    validationResultErros,
    userCtrl.verifyUser
);

routerUser.put(
    "/changeUserStatus/:id",
    verifyToken,
    validateRoles("ADMIN"),
    userCtrl.changeStatusUser
);

routerUser.get(
    "/findAllRoles",
    verifyToken,
    validateRoles("ADMIN"),
    userCtrl.findAllRoles
);

routerUser.get(
    "/findAllLocations",
    verifyToken,
    validateRoles("ADMIN"),
    userCtrl.findAllLocations
);

routerUser.get(
    "/getUsers?:page",
    verifyToken,
    validateRoles("ADMIN"),
    userCtrl.getUsers
);
