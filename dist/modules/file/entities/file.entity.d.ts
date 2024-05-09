export declare class File {
    readonly id: string;
    fileName: string;
    url: string;
    cardId: string;
    readonly updatedAt: string;
    readonly createdAt: string;
    constructor(data?: Partial<File>);
}
