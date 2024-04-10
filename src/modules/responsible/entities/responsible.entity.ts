import { randomUUID } from "crypto";

export class Responsible {
    readonly id: string;
    name: string;
    function: string;
    email: string | null;
    phone: string | null;
    clientId?: string;

    constructor(data?: Partial<Responsible>) {
        this.id = data?.id || randomUUID();

        this.email = data?.email || null;
        this.phone = data?.phone || null;
    }
}
