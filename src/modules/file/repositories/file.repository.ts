import { File } from "../entities/file.entity";


export abstract class FileRepository {
    abstract upload(file: Express.Multer.File, cardId: string): Promise<File> | File;
    abstract delete(fileName: string): Promise<void> | void; 
}

