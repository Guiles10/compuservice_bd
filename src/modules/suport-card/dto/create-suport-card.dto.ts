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
    description: string | null

    @IsArray()
    @IsOptional()
    tasks: string[] | null

    @IsString()
    @IsOptional()
    solution: string | null

    @IsEnum(CardPriority, { message: "Prioridade inválida" })
    @IsOptional()
    priority: CardPriority | null

    @IsString()
    @IsOptional()
    status: string
}
