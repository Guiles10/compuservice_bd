export declare class Cards {
    readonly id: string;
    title: string;
    description: string | null;
    solution: string | null;
    priority: string;
    status: string;
    readonly createdAt: string;
    readonly updatedAt: string;
    deleteAt: string | null;
    userId: string;
    type: string[];
    clients: string[];
    worker: string[];
    constructor(data?: Partial<Cards>);
}
