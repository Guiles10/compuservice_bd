import { hashSync } from "bcryptjs"
import { Transform } from "class-transformer"
import { IsBoolean, IsEnum, IsNotEmpty, IsString, MinLength } from "class-validator"

enum UserFunction {
    ATENDIMENTO = 'Atendimento',
    SUPORTE = 'Suporte',
    PROGRAMADOR = 'Programador',
    FATURAMENTO = 'Faturamento',
}

export class CreateUserDto {
    @IsString()
    @IsNotEmpty({message: "Name Invalido"})
    name: string

    @IsString()
    @IsNotEmpty({message: "E-mail invalido"})
    email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @Transform(({value}: {value: string}) => hashSync(value, 10), {
        groups: ['Trasforme']
    })
    password: string

    @IsString()
    @IsEnum(UserFunction)
    function: UserFunction;

    @IsBoolean()
    @IsNotEmpty()
    isAdmin: boolean
}
