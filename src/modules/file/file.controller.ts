import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileService } from './file.service';
import { JWTAuthGuard } from '../auth/jwt.auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('/:cardId')
  @UseGuards(JWTAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
      @UploadedFile() file: Express.Multer.File,
      @Param('cardId') cardId: string,
  ) {
      const result = await this.fileService.upload(file, cardId);
      return result;
  }

  @Delete('/:filename')
  async deleteFile(@Param('filename') fileName: string) {
      return await this.fileService.delete(fileName);
  }

}
