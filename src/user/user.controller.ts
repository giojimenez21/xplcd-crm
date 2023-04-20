import { Request, Response } from "express";
import { IUserservice } from "./interface";
import { toUserEntity } from "./adapters/toUser";
import { ErrorService } from "../common";
import { generateToken } from "./helpers";

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
        const { userName, password, newPassword } = req.body;
        try {
            const responseService = await this.userService.verifyUser(userName, password, newPassword);
            return res.status(200).json({ message: responseService });
        } catch (e: any) {
            if(e instanceof ErrorService) {
                return res.status(e.statusCode).json({ error: e.message });
            }
            return res.status(500).json({ error: e.message });
        }
    }
}
