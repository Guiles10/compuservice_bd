
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ResponsibleRepository } from '../responsible.repository';
import { Responsible } from '../../entities/responsible.entity';
import { CreateResponsibleDto } from '../../dto/create-responsible.dto';
import { UpdateResponsibleDto } from '../../dto/update-responsible.dto';

@Injectable()
export class ResponsiblePrismaRepository implements ResponsibleRepository {

    constructor(private prisma: PrismaService){} 

    async create(data: CreateResponsibleDto, clientId: string):Promise<Responsible> {
        const responsible = new Responsible()
        Object.assign(responsible, {
            ...data,
        })
        const newResponsible = await this.prisma.responsible.create({
            data: { ...responsible, clientId }
        })
        return newResponsible
    }


    async findAll(suportClientId: string): Promise<any> {
        const allResponsible = await this.prisma.responsible.findMany({
            where: {
                id: suportClientId,
            },
            include: {
                client: true
            },
        });
        return allResponsible;
    }

    async findOne(id: string): Promise<any> {
        const responsible = await this.prisma.responsible.findUnique({
            where: { id }
        });
        return responsible;
    }

    async update(clientId: string, responsibleId: string, data: UpdateResponsibleDto): Promise<any> {
        const responsibleIndex = await this.prisma.responsible.update({
            where: { id: responsibleId },
            data: {
                ...data,
            },
        });
        return responsibleIndex;
    }

    async delete(id: string): Promise<void> {
        await this.prisma.responsible.delete({
            where: { id }
        });
    }
}
