export declare class Responsible {
    readonly id: string;
    name: string;
    function: string;
    email: string | null;
    phone: string | null;
    clientId?: string;
    constructor(data?: Partial<Responsible>);
}
