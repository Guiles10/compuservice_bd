
import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

enum CommentPriority {
  PRIORIDADE01 = 'Muito Urgente',
  PRIORIDADE02 = 'Urgente',
  PRIORIDADE03 = 'Normal',
  PRIORIDADE04 = 'Basica',
}


export class CreateCommentsDto {
  @IsString()
  @IsNotEmpty()
  comment: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEnum(CommentPriority, { message: "Prioridade inválida" })
  @IsOptional()
  priority: CommentPriority | null;
}