/// <reference types="multer" />
import { File } from "../entities/file.entity";
export declare abstract class FileRepository {
    abstract upload(file: Express.Multer.File, cardId: string): Promise<File> | File;
    abstract delete(fileName: string): Promise<void> | void;
}
