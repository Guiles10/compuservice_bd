
import { Injectable } from '@nestjs/common';
import { SuportCardRepository } from '../suportCard.repository';
import { CreateSuportCardDto } from '../../dto/create-suport-card.dto';
import { SuportCard } from '../../entities/suport-card.entity';
import { UpdateSuportCardDto } from '../../dto/update-suport-card.dto';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class SuportCardPrismaRepository implements SuportCardRepository {

    constructor(private prisma: PrismaService){} 

    async create(data: CreateSuportCardDto, userId: string):Promise<SuportCard> {
        const supCard = new SuportCard()
        Object.assign(supCard, {
            ...data,
            status: data.status || "A Fazer"
        })
        const newCard = await this.prisma.suportCard.create({
            data: { ...supCard, userId }
        })
        return plainToInstance(SuportCard, newCard)
    }

    async findAll(): Promise<any> {
        const supCards = await this.prisma.suportCard.findMany({
            include: {
                tasks: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        function: true,
                        isAdmin: true,
                    },
                },
            },
        });
        return supCards
    }

    async findOne(id: string): Promise<SuportCard> {
        const supCard = await this.prisma.suportCard.findUnique({
            where: { id },
            include: {
                tasks: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        function: true,
                        isAdmin: true,
                    },
                }
            },
        });
        return supCard;
    }

    async update(id: string, data: UpdateSuportCardDto): Promise<SuportCard> {
        const supCardIndex = await this.prisma.suportCard.update({
            where: { id },
            data: {
                ...data,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        function: true,
                        isAdmin: true,
                    },
                }
            },
        });
        return supCardIndex;
    }

    async delete(id: string): Promise<void> {
        await this.prisma.suportCard.delete({
            where: { id }
        });
    }
}
