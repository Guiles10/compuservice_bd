declare enum CardPriority {
    PRIORIDADE01 = "Muito Urgente",
    PRIORIDADE02 = "Urgente",
    PRIORIDADE03 = "Normal",
    PRIORIDADE04 = "Basica"
}
declare enum CardStatus {
    TODO = "A Fazer",
    IN_PROGRESS = "Em Andamento",
    DONE = "Concluido"
}
export declare enum UserFunction {
    ATENDIMENTO = "Atendimento",
    SUPORTE = "Suporte",
    PROGRAMACAO = "Programa\u00E7\u00E3o",
    FATURAMENTO = "Faturamento",
    SUPORTEHOSPTAL = "Suporte Hospital",
    INSTALACAO = "Instala\u00E7\u00E3o"
}
export declare class CreateCardsDto {
    title: string;
    description: string | null;
    solution: string | null;
    priority: CardPriority | null;
    status: CardStatus | null;
    type: UserFunction[];
    clients: string[];
    worker: string[];
}
export {};
