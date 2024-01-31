import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto, UserFunction } from './create-user.dto';
import { IsArray, IsBoolean, IsEnum, IsNotEmpty } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {}

// export class UpdateUserDto {

//     @IsArray()
//     @IsNotEmpty({message: "Escolha uma atividade"})
//     @IsEnum(UserFunction)
//     function: UserFunction;

//     @IsNotEmpty({message: "O Usuario é ADM?"})
//     @IsBoolean()
//     isAdmin: boolean;
// }
