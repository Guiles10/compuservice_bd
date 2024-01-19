
import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

enum CardPriority {
  PRIORIDADE01 = 'Muito Urgente',
  PRIORIDADE02 = 'Urgente',
  PRIORIDADE03 = 'Normal',
  PRIORIDADE04 = 'Basica',
}
enum CardStatus {
  TODO = 'A Fazer',
  IN_PROGRESS = 'Em Andamento',
  DONE = 'Concluido',
}


export class CreateSuportCardDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description: string | null;

  @IsString()
  @IsOptional()
  solution: string | null;

  @IsEnum(CardPriority, { message: "Prioridade inválida" })
  @IsOptional()
  priority: CardPriority | null;

  @IsEnum(CardStatus, { message: "Status inválido" })
  @IsOptional()
  status: CardStatus | null;
}