import { IsOptional, IsString } from "class-validator";

export class CreateFileDto {
    @IsString()
    @IsOptional()
    fileName: string | null;
  
    @IsString()
    @IsOptional()
    url: string | null;
}
    