export class ErrorService extends Error {
    constructor(public readonly statusCode: number, public readonly message: string) { 
        super(message);
    }
}
