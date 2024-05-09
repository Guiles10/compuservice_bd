/// <reference types="multer" />
import { FileService } from './file.service';
export declare class FileController {
    private readonly fileService;
    constructor(fileService: FileService);
    uploadFile(file: Express.Multer.File, cardId: string): Promise<import("./entities/file.entity").File>;
    deleteFile(fileName: string): Promise<void>;
}
