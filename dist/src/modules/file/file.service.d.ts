/// <reference types="multer" />
import { FileRepository } from './repositories/file.repository';
export declare class FileService {
    private fileRepository;
    constructor(fileRepository: FileRepository);
    upload(file: Express.Multer.File, cardId: string): Promise<import("./entities/file.entity").File>;
    delete(fileName: string): Promise<void>;
}
