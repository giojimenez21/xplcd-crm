export interface Token {
    id: number;
    userName: string;
    token: string;
}

export enum TokenError {
    TokenExpiredError = "TokenExpiredError",
    JsonWebTokenError = "JsonWebTokenError",
}