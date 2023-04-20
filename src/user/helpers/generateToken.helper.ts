import jwt from 'jsonwebtoken';

export const generateToken = (id: number, userName: string, role: string) => new Promise<string>((resolve, reject) => {
    const payload = { id, userName, role };

    jwt.sign(
        payload,
        process.env.SECRET_JWT!,
        {
            expiresIn: process.env.EXPIRE_JWT
        },
        (err, token) => {
            if(err) {
                reject("No se pudo crear el token.");
                return
            }

            resolve(token!);
        }
    )
})