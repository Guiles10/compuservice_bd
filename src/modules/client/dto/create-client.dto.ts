import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateClientDto {
    @IsString()
    @IsNotEmpty()
    codigo: string;

    @IsString()
    @IsNotEmpty()
    companyName: string;

    @IsString()
    @IsNotEmpty()
    socialName: string;

    @IsString()
    @IsNotEmpty()
    cnpj: string;

    @IsString()
    @IsOptional()
    businessPhone_1: string;

    @IsString()
    @IsOptional()
    businessPhone_2: string;

    @IsString()
    @IsOptional()
    businessEmail: string;

    @IsString()
    @IsOptional()
    comment: string;

    @IsString()
    @IsOptional()
    cep: string;

    @IsString()
    @IsOptional()
    state: string;

    @IsString()
    @IsOptional()
    city: string;

    @IsString()
    @IsOptional()
    street: string;

    @IsString()
    @IsOptional()
    neighborhood: string;

    @IsString()
    @IsOptional()
    number: string;
}
