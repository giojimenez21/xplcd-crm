import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";

import { TokenError } from '../interface';

export const verifyToken = async(req: Request, res: Response, next: NextFunction) => {
    const tokenBearer = req.headers["authorization"]?.split(" ")[1];
    if(!tokenBearer) {
        return res.status(400).json({ error: "No hay token en la petición." });
    }
    try {
        const { userName, role } = jwt.verify(tokenBearer, process.env.SECRET_JWT!) as { userName: string, role: string };
        console.log(userName, role);
        req.userName = userName;
        req.role = role

    } catch (e: any) {
        if(e.name === TokenError.TokenExpiredError) {
            return res.status(401).json({ error: "Token expirado." });
        }

        if(e.name === TokenError.JsonWebTokenError) {
            return res.status(403).json({ error: "No se pudo validar el token." })
        }

        return res.status(500).json({ error: e.message })
    }

    next();
}