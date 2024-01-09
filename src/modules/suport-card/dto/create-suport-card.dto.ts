import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator"

enum CardPriority {
    PRIORIDADE01 = 'Muito Urgente',
    PRIORIDADE02 = 'Urgente',
    PRIORIDADE03 = 'Normal',
    PRIORIDADE04 = 'Basica',
}

export class CreateSuportCardDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsOptional()
    descriptin: string | null

    @IsArray()
    @IsOptional()
    tasks: string[] | null

    @IsString()
    @IsOptional()
    solution: string | null

    @IsEnum(CardPriority, { message: "Prioridade inválida" })
    @IsOptional()
    priority: CardPriority | null
}
