
import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../client.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateClientDto } from '../../dto/create-client.dto';
import { Client } from '../../entities/client.entity';
import { UpdateClientDto } from '../../dto/update-client.dto';

@Injectable()
export class ClientPrismaRepository implements ClientRepository {

    constructor(private prisma: PrismaService){} 

    async create(data: CreateClientDto):Promise<Client> {
        const existingClient = await this.prisma.client.findUnique({
            where: { cnpj: data.cnpj },
          });
          
        if (existingClient) {
            throw new Error('Cliente com este CNPJ já existe.');
        }
        const client = new Client()
        Object.assign(client, {
            ...data,
        })
        const newClient = await this.prisma.client.create({
            data: { ...client }
        })
        return newClient
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
        const clientIndex = await this.prisma.client.update({
            where: { id },
            data: { ...data },
            include: {
                responsibles: true,
            },
        });
        return clientIndex;
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
