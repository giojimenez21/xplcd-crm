import { body } from "express-validator";

export const validatorLogin = [
    body("userName")
        .notEmpty().withMessage("El userName es requerido."),
    body("password")
        .notEmpty().withMessage("El password es requerido.")
        .isLength({ min:6 }).withMessage("La logitud minima debe ser de 6 caracteres.")
];

export const validatorRegister = [
    body("firstName")
        .notEmpty().withMessage("El firstName es requerido."),
    body("lastName")
        .notEmpty().withMessage("El lastName es requerido."),
    body("userName")
        .notEmpty().withMessage("El userName es requerido."),
    body("password")
        .notEmpty().withMessage("El password es requerido.")
        .isLength({ min:6 }).withMessage("La logitud minima debe ser de 6 caracteres."),
    body("idLocation")
        .notEmpty().withMessage("El idLocation es requerido.")
        .isNumeric().withMessage("El idLocation debe ser un número."),
    body("idRole")
        .notEmpty().withMessage("El idRole es requerido.")
        .isNumeric().withMessage("El idRole debe ser un número."),
];

export const validatorVerifyUser = [
    body("userName")
        .notEmpty().withMessage("El userName es requerido."),
    body("password")
        .notEmpty().withMessage("El password es requerido.")
        .isLength({ min:6 }).withMessage("La logitud minima debe ser de 6 caracteres."),
    body("newPassword")
        .notEmpty().withMessage("El password es requerido.")
        .isLength({ min:6 }).withMessage("La logitud minima debe ser de 6 caracteres."),
    body().custom((value, { req: { body: {password, newPassword}} }) => {
        if(password === newPassword) {
            console.log(password, newPassword);
            throw new Error("El nuevo password debe ser distinto al original.")
        }
        return true;
    })
]