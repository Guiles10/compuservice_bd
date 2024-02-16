import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { PrismaService } from 'src/database/prisma.service';
import { FileRepository } from './repositories/file.repository';
import { FilePrismaRepository } from './repositories/prisma/filePrismaRepository';

@Module({
  controllers: [FileController],
  providers: [
    FileService,
    PrismaService,
    {
      provide: FileRepository,
      useClass: FilePrismaRepository,
    }],
})
export class FileModule {}
