import { IsOptional, IsString } from "class-validator";

export class CreateFileDto {
    @IsString()
    @IsOptional()
    filename: string | null;
  
    @IsString()
    @IsOptional()
    url: string | null;
}
    