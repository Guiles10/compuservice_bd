
import { IsArray, IsEnum, IsIn, IsNotEmpty, IsOptional, IsString } from "class-validator";

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
export enum UserFunction {
  ATENDIMENTO = 'Atendimento',
  SUPORTE = 'Suporte',
  PROGRAMACAO = 'Programação',
  FATURAMENTO = 'Faturamento',
  SUPORTEHOSPTAL = 'Suporte Hospital',
  INSTALACAO = 'Instalação',
}

export class CreateCardsDto {
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

  @IsArray()
  @IsNotEmpty({ message: "Escolha pelo menos uma atividade" }) 
  @IsIn(Object.values(UserFunction), { each: true }) 
  type: UserFunction[];
  
  @IsArray()
  @IsOptional()
  clients: string[];

  @IsArray()
  @IsOptional()
  worker: string[];
}