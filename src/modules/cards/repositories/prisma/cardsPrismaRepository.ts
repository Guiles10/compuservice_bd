
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
        const card = await this.prisma.cards.findMany({
            include: {
                tasks: true,
                files: true,
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

        return card;
    }

    async findOne(id: string): Promise<Cards> {
        const supCard = await this.prisma.cards.findUnique({
            where: { id },
            include: {
                tasks: true,
                files: true,
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
        console.log(data)
        const supCardIndex = await this.prisma.cards.update({
            where: { id },
            data: {
                ...data,
                updatedAt: moment().format('DD/MM/YYYY HH:mm:ss')
            },
            include: {
                tasks: true,
                files: true,
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

    async deleteFileFromCard(cardId: string, fileName: string): Promise<any> {
        try {
            const card = await this.prisma.cards.findUnique({
                where: { id: cardId },
                include: { files: true } // Certifique-se de incluir os arquivos associados ao cartão
            });
    
            if (!card) {
                throw new Error(`Cartão com ID ${cardId} não encontrado.`);
            }
    
            const deletedFile = card.files.filter(file => file.filename == fileName);
            const idFile = deletedFile[0].id

            await this.prisma.file.delete({
                where: { id: idFile }
            });

        } catch (error) {
          throw new Error(`Erro ao excluir arquivo do cartão: ${error.message}`);
        }
      }
}
