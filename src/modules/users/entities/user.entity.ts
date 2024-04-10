import { Exclude } from "class-transformer";
import { randomUUID } from "crypto";

export class User {
    readonly id: string;
    name: string;
    email: string;

    @Exclude()
    password: string;

    function: string[];
    isAdmin: boolean;

    constructor(data?: Partial<User>) {
        this.id = data?.id || randomUUID();

        this.function = data?.function || [];
        this.isAdmin = data?.isAdmin || false;
    }
}
