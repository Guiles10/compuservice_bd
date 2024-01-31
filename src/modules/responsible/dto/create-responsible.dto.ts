import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateResponsibleDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsOptional()
    function: string | null;
    
    @IsString()
    @IsOptional()
    email: string | null;

    @IsString()
    @IsOptional()
    phone: string | null;
}
