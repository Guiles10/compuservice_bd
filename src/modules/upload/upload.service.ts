import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import path from 'path';


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
    console.log(data)
        return data;
    }

    async getImagemUrl(nomeDoArquivo: string): Promise<any | null> {
        const { data, error } = await this.supabase
          .storage
          .from('compuservice')
        //   .getPublicUrl(nomeDoArquivo);
        .createSignedUrl(nomeDoArquivo, 60); // token expira em 1 minuto (opcional)

        
        if (error) {
          console.error('Erro ao recuperar URL:', error.message);
          return null;
        }
        console.log(data)
        return data;
      }
}
