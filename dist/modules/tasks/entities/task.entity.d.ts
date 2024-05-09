export declare class Task {
    readonly id: string;
    task: string;
    completed: boolean;
    cardsId: string;
    readonly updatedAt: string;
    readonly createdAt: string;
    constructor(data?: Partial<Task>);
}
