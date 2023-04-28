import { validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";

export const validationResultErros = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({error: errors.array()});
    }
    next();
}