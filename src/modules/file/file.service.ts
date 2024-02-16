import { Injectable } from '@nestjs/common';
import { FileRepository } from './repositories/file.repository';

@Injectable()
export class FileService {
  
  constructor(private fileRepository: FileRepository) {}

  async upload(file: Express.Multer.File, cardId: string) {
    const newFile =  await this.fileRepository.upload(file, cardId)
    return newFile
  }

  async delete(fileName: string) {
    return await this.fileRepository.delete(fileName);
  }

}