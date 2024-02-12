import { Controller, Get, Param, Post, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { Response } from 'express';
import { UploadService } from './upload.service';
import { JWTAuthGuard } from '../auth/jwt.auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('/')
  @UseGuards(JWTAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File){
      const result = await this.uploadService.upload(file);
      return result;
  }


  @Get(':nomeDoArquivo')
  async getImagemUrl(@Param('nomeDoArquivo') nomeDoArquivo: string): Promise<string | null> {
    return await this.uploadService.getImagemUrl(nomeDoArquivo);
  }

}