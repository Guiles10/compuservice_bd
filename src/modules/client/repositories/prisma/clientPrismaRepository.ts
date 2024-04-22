
import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../client.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateClientDto } from '../../dto/create-client.dto';
import { Client } from '../../entities/client.entity';
import { UpdateClientDto } from '../../dto/update-client.dto';
import { copyFile } from 'fs/promises';

@Injectable()
export class ClientPrismaRepository implements ClientRepository {

    constructor(private prisma: PrismaService){} 

    async create(dataClient: CreateClientDto):Promise<Client> {
        if (dataClient.cpf === "") {
            dataClient.cpf = null;
        }
        if (dataClient.cnpj === "") {
            dataClient.cnpj = null;
        }
        if (dataClient.codigo === "") {
            dataClient.codigo = null;
        }

        const client = new Client()
        Object.assign(client, {
            ...dataClient,
        })
        const newClient = await this.prisma.client.create({
            data: { ...client }
        })
        return newClient
    }

    async findByClientCNPJ(cnpj: string | null): Promise<any> {
        if (cnpj === undefined) {
            return null
        }
        const clientCNPJ = await this.prisma.client.findUnique({
            where: {cnpj}
        })
        return clientCNPJ
    }
    async findByClientCPF(cpf: string | null): Promise<any> {
        if (cpf === undefined) {
            return null
        }
        const clientCPF = await this.prisma.client.findUnique({
            where: {cpf}
        })
        return clientCPF
    }
    async findByClientCompanyName(companyName: string): Promise<any> {
        const clientCompName = await this.prisma.client.findUnique({
            where: {companyName}
        })
        return clientCompName
    }
    async findByClientCodigo(codigo: string | null): Promise<any> {
        if (codigo === undefined) {
            return null
        }
        const clientCod = await this.prisma.client.findUnique({
            where: {codigo}
        })
        return clientCod
    }

    async findAll(): Promise<Client[]> {
        const client = await this.prisma.client.findMany({
            include: {
                responsibles: true,
            },
        });

        return client;
    }

    async findOne(id: string): Promise<Client> {
        const client = await this.prisma.client.findUnique({
            where: { id },
            include: {
                responsibles: true,
            },
        });

        return { ...client }
    }

    async update(id: string, data: UpdateClientDto): Promise<Client> {
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

    async delete(id: string): Promise<void> {
        await this.prisma.$transaction(async (prisma) => {
            await prisma.responsible.deleteMany({
                where: { clientId: id }
            });
            await prisma.client.delete({
                where: { id }
            });
        });
    }
}
