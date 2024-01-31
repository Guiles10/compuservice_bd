
import { Injectable } from '@nestjs/common';
import { CardsRepository } from '../cards.repository';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';
import * as moment from 'moment';
import { CreateCardsDto } from '../../dto/create-cards.dto';
import { Cards } from '../../entities/cards.entity';
import { UpdateCardsDto } from '../../dto/update-cards.dto';

@Injectable()
export class CardsPrismaRepository implements CardsRepository {

    constructor(private prisma: PrismaService){} 

    async create(data: CreateCardsDto, userId: string):Promise<Cards> {
        const card = new Cards()
        Object.assign(card, {
            ...data,
            status: data.status || "A Fazer"
        })
        const newCard = await this.prisma.cards.create({
            data: { ...card, userId }
        })
        return plainToInstance(Cards, newCard)
    }

    async findAll(): Promise<Cards[]> {
        const supCards = await this.prisma.cards.findMany({
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

        return supCards;
    }

    async findOne(id: string): Promise<Cards> {
        const supCard = await this.prisma.cards.findUnique({
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

        return {...supCard }
    }

    async update(id: string, data: UpdateCardsDto): Promise<Cards> {

        const supCardIndex = await this.prisma.cards.update({
            where: { id },
            data: {
                ...data,
                updatedAt: moment().format('DD/MM/YYYY HH:mm:ss')
            },
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
        return supCardIndex;
    }

    async delete(id: string): Promise<void> {
        await this.prisma.$transaction(async (prisma) => {
            await prisma.task.deleteMany({
                where: { cardsId: id }
            });
            await prisma.cards.delete({
                where: { id }
            });
        });
    }
}
