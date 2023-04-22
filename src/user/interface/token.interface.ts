export interface Token {
    id: number;
    userName: string;
    token: string;
}

export enum TokenError {
    Expired = "TokenExpiredError",
    NotValidate = "JsonWebTokenError",
}