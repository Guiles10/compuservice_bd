import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { PrismaService } from 'src/database/prisma.service';


@Injectable()
export class UploadService {
    private readonly supabase;

    constructor() {
        const supabaseUrl = process.env.SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_KEY;
        this.supabase = createClient(supabaseUrl, supabaseKey, {
            auth: {
                persistSession: false
            }
        });
    }


    async upload(file: Express.Multer.File) {
        const fileExtension = file.originalname.split('.').pop()?.toLowerCase();
    
        if (!fileExtension || !(fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png' || fileExtension === 'gif' || fileExtension === 'pdf')) {
            throw new Error('Tipo de arquivo inválido. Apenas imagens (JPG, JPEG, PNG, GIF) e PDFs são permitidos.');
        }
    
        const mimeType = fileExtension === 'pdf' ? 'application/pdf' : `image/${fileExtension}`;
    
        const { data, error } = await this.supabase.storage.from('compuservice').upload(file.originalname, file.buffer, {
            upsert: true,
            contentType: mimeType
        });
        
        if (error) {
            throw new Error(`Erro ao fazer upload do arquivo: ${error.message}`);
        }
        return data
        // Crie uma entrada na tabela File com as informações relevantes do arquivo
        // const createdFile = await this.prisma.files.create({
        //     data: {
        //         filename: file.originalname,
        //         url: data?.Key, // Armazene a chave do arquivo retornada pelo Supabase
        //         createdAt: new Date().toISOString(),
        //         // Adicione qualquer outra informação relevante que você queira armazenar
        //     }
        // });

        // return createdFile;
    }
  

    async getImagemUrl(nomeDoArquivo: string): Promise<any | null> {
        const { data, error } = await this.supabase
            .storage
            .from('compuservice')
            .createSignedUrl(nomeDoArquivo, 60);

        
        if (error) {
          console.error('Erro ao recuperar URL:', error.message);
          return null;
        }
        console.log(data)
        return data;
      }
}
