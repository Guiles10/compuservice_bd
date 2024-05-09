declare enum CommentPriority {
    PRIORIDADE01 = "Muito Urgente",
    PRIORIDADE02 = "Urgente",
    PRIORIDADE03 = "Normal",
    PRIORIDADE04 = "Basica"
}
export declare class CreateCommentsDto {
    comment: string;
    title: string;
    priority: CommentPriority | null;
}
export {};
