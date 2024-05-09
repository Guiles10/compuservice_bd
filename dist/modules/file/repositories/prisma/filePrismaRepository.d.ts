/// <reference types="multer" />
import { PrismaService } from 'src/database/prisma.service';
import { FileRepository } from '../file.repository';
import { File } from '../../entities/file.entity';
export declare class FilePrismaRepository implements FileRepository {
    private prisma;
    private readonly supabase;
    constructor(prisma: PrismaService);
    upload(file: Express.Multer.File, cardId: string): Promise<File>;
    delete(fileName: string): Promise<any>;
}
