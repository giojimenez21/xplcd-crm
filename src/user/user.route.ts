import { Router } from "express";

import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { validateRoles, verifyToken } from "./middlewares";

export const routerUser = Router();

const userService = new UserService();

const userCtrl = new UserController(userService);

routerUser.post("/login", userCtrl.login);

routerUser.post("/register", verifyToken, validateRoles("ADMIN") ,userCtrl.registerUser);

routerUser.get("/renew", verifyToken, userCtrl.renewToken);

routerUser.put("/verifyUser", verifyToken ,userCtrl.verifyUser);

routerUser.put("/changeUserStatus/:id", verifyToken, validateRoles("ADMIN"), userCtrl.changeStatusUser);

routerUser.get("/findAllRoles", verifyToken, validateRoles("ADMIN"), userCtrl.findAllRoles);

routerUser.get("/findAllLocations", verifyToken, validateRoles("ADMIN"), userCtrl.findAllLocations);

routerUser.get("/getUsers?:page", verifyToken, validateRoles("ADMIN"), userCtrl.getUsers)