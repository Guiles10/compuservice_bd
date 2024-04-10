import { randomUUID } from "crypto";

export class Responsible {
    readonly id: string;
    name: string;
    position: string | null;
    email: string | null;
    phone: string | null;
    clientId?: string;

    constructor(data?: Partial<Responsible>) {
        this.id = data?.id || randomUUID();
        this.position = data?.position || null;
        this.email = data?.email || null;
        this.phone = data?.phone || null;

    }
}
