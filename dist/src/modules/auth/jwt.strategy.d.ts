import { Strategy } from 'passport-jwt';
interface IUserLogin {
    email: string;
    sub: string;
}
declare const JWTStrategy_base: new (...args: any[]) => Strategy;
export declare class JWTStrategy extends JWTStrategy_base {
    constructor();
    validate(payload: IUserLogin): Promise<{
        id: string;
        email: string;
    }>;
}
export {};
