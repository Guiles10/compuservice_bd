import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}