
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { FileRepository } from '../file.repository';
import { createClient } from '@supabase/supabase-js';
import { File } from '../../entities/file.entity';


@Injectable()
export class FilePrismaRepository implements FileRepository {
    private readonly supabase;
  
    constructor(private prisma: PrismaService) {
        const supabaseUrl = process.env.SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_KEY;
        this.supabase = createClient(supabaseUrl, supabaseKey, {
            auth: {
                persistSession: false
            }
        });
    }
    
    async upload(file: Express.Multer.File, cardId: string): Promise<File> {
        const fileExtension = file.originalname.split('.').pop()?.toLowerCase();
        
        if (!fileExtension || !(fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png' || fileExtension === 'gif' || fileExtension === 'pdf')) {
            throw new Error('Tipo de arquivo inválido. Apenas imagens (JPG, JPEG, PNG, GIF) e PDFs são permitidos.');
        }
        
        const mimeType = fileExtension === 'pdf' ? 'application/pdf' : `image/${fileExtension}`;
        
        const { data: uploadData, error: uploadError } = await this.supabase.storage.from('compuservice').upload(file.originalname, file.buffer, {
            upsert: true,
            contentType: mimeType
        });
        
        if (uploadError) {
            throw new Error(`Erro ao fazer upload do arquivo: ${uploadError.message}`);
        }
    
        const { data: signedUrlData, error: signedUrlError } = await this.supabase
            .storage
            .from('compuservice')
            .createSignedUrl(file.originalname, 86.400 * 3650);
    
        if (signedUrlError) {
            console.error('Erro ao recuperar URL:', signedUrlError.message);
            return null;
        }
    
        const files = new File()
        Object.assign(files, {
            filename: file.originalname,
            url: signedUrlData.signedUrl
        })
    
        const existingFile = await this.prisma.file.findUnique({
            where: { filename: file.originalname }
        });
        
        if (existingFile) {
            const updatedFile = await this.prisma.file.update({
                where: { id: existingFile.id },
                data: { ...files, cardId }
            });
            return updatedFile;
        } else {
            const newFile = await this.prisma.file.create({
                data: { ...files, cardId }
            });
            return newFile;
        }
        
    }

    async delete(fileName: string): Promise<any> {
        const { error } = await this.supabase.storage.from('compuservice').remove([fileName]);
        if (error) {
            throw new Error(`Erro ao excluir o arquivo: ${error.message}`);
        }
        return { message: 'Arquivo excluído com sucesso!' };
    }

}
