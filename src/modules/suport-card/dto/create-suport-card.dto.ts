import { IsArray, IsNotEmpty, IsString } from "class-validator"

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
    descriptin: string

    @IsArray()
    tasks: string[]

    @IsString()
    solution: string

    @IsString()
    priority: string

    @IsString()
    createdAt: string

    @IsString()
    updatedAt: string
}
