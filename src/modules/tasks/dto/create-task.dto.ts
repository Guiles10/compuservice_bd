import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateTaskDto {
    
    @IsString()
    @IsNotEmpty()
    task: string | null;
  
    @IsBoolean()
    @IsOptional()
    completed: boolean | null;
}
