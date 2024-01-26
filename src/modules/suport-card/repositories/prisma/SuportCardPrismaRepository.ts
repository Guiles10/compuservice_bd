
import { Injectable } from '@nestjs/common';
import { SuportCardRepository } from '../suportCard.repository';
import { CreateSuportCardDto } from '../../dto/create-suport-card.dto';
import { SuportCard } from '../../entities/suport-card.entity';
import { UpdateSuportCardDto } from '../../dto/update-suport-card.dto';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';
import * as moment from 'moment';

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

    async findAll(): Promise<SuportCard[]> {
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
    
        const supCardsWithUsersPromises = supCards.map(async (supCard) => {
            const usersPromises = supCard.workers.map(async (workerId) => {
                const user = await this.prisma.user.findUnique({
                    where: { id: workerId },
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        function: true,
                        isAdmin: true,
                    },
                });
                return user;
            });
    
            const users = await Promise.all(usersPromises);
    
            return { ...supCard, workers: users } as SuportCard;
        });
    
        const supCardsWithUsers = await Promise.all(supCardsWithUsersPromises);
    
        return supCardsWithUsers;
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
        const usersPromises = supCard.workers.map(async (workerId) => {
            const user = await this.prisma.user.findUnique({
                where: { id: workerId },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    function: true,
                    isAdmin: true,
                },
            });
            return user;
        });
    
        const users = await Promise.all(usersPromises);

        return {...supCard, workers: users}
    }

    async update(id: string, data: UpdateSuportCardDto): Promise<SuportCard> {
        const existingUsers = await this.prisma.user.findMany({
            where: { id: { in: data.workers } },
        });

        const existingUserIds = existingUsers.map((user) => user.id);
        const supCardIndex = await this.prisma.suportCard.update({
            where: { id },
            data: {
                ...data,
                updatedAt: moment().format('DD/MM/YYYY HH:mm:ss'),
                workers: { set: existingUserIds },
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
                },
            },
        });
        return supCardIndex;
    }

    async delete(id: string): Promise<void> {
        await this.prisma.$transaction(async (prisma) => {
            await prisma.task.deleteMany({
                where: { suportCardId: id }
            });
            await prisma.suportCard.delete({
                where: { id }
            });
        });
    }
}
