"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilePrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("src/database/prisma.service");
const supabase_js_1 = require("@supabase/supabase-js");
const file_entity_1 = require("../../entities/file.entity");
let FilePrismaRepository = class FilePrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
        const supabaseUrl = process.env.SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
        this.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey, {
            auth: {
                persistSession: false
            }
        });
    }
    async upload(file, cardId) {
        const fileExtension = file.originalname.split('.').pop()?.toLowerCase();
        if (!fileExtension || !(fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png' || fileExtension === 'gif' || fileExtension === 'pdf')) {
            throw new Error('Tipo de arquivo inválido. Apenas imagens (JPG, JPEG, PNG, GIF) e PDFs são permitidos.');
        }
        const mimeType = fileExtension === 'pdf' ? 'application/pdf' : `image/${fileExtension}`;
        const { data: uploadData, error: uploadError } = await this.supabase.storage.from('Compuservice').upload(file.originalname, file.buffer, {
            upsert: true,
            contentType: mimeType
        });
        if (uploadError) {
            throw new Error(`Erro ao fazer upload do arquivo: ${uploadError.message}`);
        }
        const { data: signedUrlData, error: signedUrlError } = await this.supabase
            .storage
            .from('Compuservice')
            .createSignedUrl(file.originalname, 86.400 * 3650);
        if (signedUrlError) {
            console.error('Erro ao recuperar URL:', signedUrlError.message);
            return null;
        }
        const files = new file_entity_1.File();
        Object.assign(files, {
            fileName: file.originalname,
            url: signedUrlData.signedUrl
        });
        const existingFile = await this.prisma.file.findUnique({
            where: { fileName: file.originalname }
        });
        if (existingFile) {
            const updatedFile = await this.prisma.file.update({
                where: { id: existingFile.id },
                data: { ...files, cardId }
            });
            return updatedFile;
        }
        else {
            const newFile = await this.prisma.file.create({
                data: { ...files, cardId }
            });
            return newFile;
        }
    }
    async delete(fileName) {
        const { error } = await this.supabase.storage.from('Compuservice').remove([fileName]);
        if (error) {
            throw new Error(`Erro ao excluir o arquivo: ${error.message}`);
        }
        return { message: 'Arquivo excluído com sucesso!' };
    }
};
exports.FilePrismaRepository = FilePrismaRepository;
exports.FilePrismaRepository = FilePrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FilePrismaRepository);
//# sourceMappingURL=filePrismaRepository.js.map