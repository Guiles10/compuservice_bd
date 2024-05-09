export declare class User {
    readonly id: string;
    name: string;
    email: string;
    password: string;
    function: string[];
    isAdmin: boolean;
    constructor(data?: Partial<User>);
}
