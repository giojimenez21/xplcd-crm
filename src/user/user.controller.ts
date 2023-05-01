import { Request, Response } from "express";
import { ErrorService } from "../common";
import { IUserservice } from "./interface";

export class UserController {
    constructor(private readonly userService: IUserservice) {}

    public registerUser = async(req: Request, res: Response) => {
        try {
            const userCreatedAndToken = await this.userService.createUser(req.body);
            
            return res.status(201).json(userCreatedAndToken);
        } catch (e:any) {
            if(e instanceof ErrorService) {
                return res.status(e.statusCode).json({ error: e.message });
            }
            return res.status(500).json({ error: e.message });
        }
    }

    public login = async(req: Request, res: Response) => {
        const { userName, password } = req.body;
        try {
            const userWithToken = await this.userService.login(
                userName,
                password
            );
            return res.status(200).json(userWithToken);
        } catch (e: any) {
            if(e instanceof ErrorService) {
                return res.status(e.statusCode).json({ error: e.message });
            }
            return res.status(500).json({ error: e.message });
        }
    }


    public renewToken = async(req: Request, res: Response) => {
        try {
            const userWithToken = await this.userService.renewToken(
                req.userName
            );
            return res.status(200).json(userWithToken);
        } catch (e: any) {
            if(e instanceof ErrorService) {
                return res.status(e.statusCode).json({ error: e.message });
            }
            return res.status(500).json({ error: e.message });
        }
    }

    public verifyUser = async(req: Request, res: Response) => {
        const { password, newPassword } = req.body;
        try {
            const responseService = await this.userService.verifyUser(req.userName, password, newPassword);
            return res.status(200).json({ message: responseService });
        } catch (e: any) {
            if(e instanceof ErrorService) {
                return res.status(e.statusCode).json({ error: e.message });
            }
            return res.status(500).json({ error: e.message });
        }
    }

    public changeStatusUser = async(req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const responseService = await this.userService.changeUserStatus(+id);
            return res.status(200).json({ message: responseService });
        } catch (e: any) {
            if(e instanceof ErrorService) {
                return res.status(e.statusCode).json({ error: e.message });
            }
            return res.status(500).json({ error: e.message });
        }
    }

    public findAllRoles = async(req: Request, res: Response) => {
        try {
            const roles = await this.userService.findAllRoles();
            return res.status(200).json(roles);
        } catch (e: any) {
            if(e instanceof ErrorService) {
                return res.status(e.statusCode).json({ error: e.message });
            }
            return res.status(500).json({ error: e.message });
        }
    }

    public findAllLocations = async(req: Request, res: Response) => {
        try {
            const locations = await this.userService.findAllLocations();
            return res.status(200).json(locations);
        } catch (e: any) {
            if(e instanceof ErrorService) {
                return res.status(e.statusCode).json({ error: e.message });
            }
            return res.status(500).json({ error: e.message });
        }
    }

    public getUsers = async(req: Request, res: Response) => {
        const { page } = req.query;
        try {
            const users = await this.userService.getUsers(page ? +page : 1);
            return res.status(200).json(users);
        } catch (e: any) {
            if(e instanceof ErrorService) {
                return res.status(e.statusCode).json({ error: e.message });
            }
            return res.status(500).json({ error: e.message });
        }
    }
}
