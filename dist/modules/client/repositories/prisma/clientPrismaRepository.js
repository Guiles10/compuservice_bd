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
exports.ClientPrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../database/prisma.service");
const client_entity_1 = require("../../entities/client.entity");
let ClientPrismaRepository = class ClientPrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dataClient) {
        if (dataClient.cpf === "") {
            dataClient.cpf = null;
        }
        if (dataClient.cnpj === "") {
            dataClient.cnpj = null;
        }
        if (dataClient.codigo === "") {
            dataClient.codigo = null;
        }
        const client = new client_entity_1.Client();
        Object.assign(client, {
            ...dataClient,
        });
        const newClient = await this.prisma.client.create({
            data: { ...client }
        });
        return newClient;
    }
    async findByClientCNPJ(cnpj) {
        if (cnpj === undefined) {
            return null;
        }
        const clientCNPJ = await this.prisma.client.findUnique({
            where: { cnpj }
        });
        return clientCNPJ;
    }
    async findByClientCPF(cpf) {
        if (cpf === undefined) {
            return null;
        }
        const clientCPF = await this.prisma.client.findUnique({
            where: { cpf }
        });
        return clientCPF;
    }
    async findByClientCompanyName(companyName) {
        const clientCompName = await this.prisma.client.findUnique({
            where: { companyName }
        });
        return clientCompName;
    }
    async findByClientCodigo(codigo) {
        if (codigo === undefined) {
            return null;
        }
        const clientCod = await this.prisma.client.findUnique({
            where: { codigo }
        });
        return clientCod;
    }
    async findAll() {
        const client = await this.prisma.client.findMany({
            include: {
                responsibles: true,
            },
        });
        return client;
    }
    async findOne(id) {
        const client = await this.prisma.client.findUnique({
            where: { id },
            include: {
                responsibles: true,
            },
        });
        return { ...client };
    }
    async update(id, data) {
        if (data.cpf === "") {
            data.cpf = null;
        }
        if (data.cnpj === "") {
            data.cnpj = null;
        }
        if (data.codigo === "") {
            data.codigo = null;
        }
        const existingClient = await this.prisma.client.findUnique({
            where: { id },
        });
        if (!existingClient) {
            throw new Error("Cliente não encontrado");
        }
        const updatedClient = await this.prisma.client.update({
            where: { id },
            data: { ...data },
            include: {
                responsibles: true,
            },
        });
        return updatedClient;
    }
    async delete(id) {
        await this.prisma.$transaction(async (prisma) => {
            await prisma.responsible.deleteMany({
                where: { clientId: id }
            });
            await prisma.client.delete({
                where: { id }
            });
        });
    }
};
exports.ClientPrismaRepository = ClientPrismaRepository;
exports.ClientPrismaRepository = ClientPrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientPrismaRepository);
//# sourceMappingURL=clientPrismaRepository.js.map