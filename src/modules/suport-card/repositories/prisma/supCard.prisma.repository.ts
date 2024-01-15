
import { Injectable } from '@nestjs/common';
import { SuportCardRepository } from '../suportCard.repository';
import { CreateSuportCardDto } from '../../dto/create-suport-card.dto';
import { SuportCard } from '../../entities/suport-card.entity';
import { UpdateSuportCardDto } from '../../dto/update-suport-card.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class SuportCardPrismaRepository implements SuportCardRepository {

    constructor(private prisma: PrismaService){} 

    async create(data: CreateSuportCardDto, userId: string):Promise<SuportCard> {
        const supCard = new SuportCard()
        Object.assign(supCard, {
           ...data,
           status: data.status || "A Fazer",
        })
        const newCard = await this.prisma.suportCard.create({
            data: { ...supCard, userId }
        })
        return newCard
    }

    async findAll(): Promise<any> {
        const supCard = await this.prisma.suportCard.findMany()
        return supCard
    }
    
    async findOne(id: string): Promise<SuportCard> {
        const supCard = await this.prisma.suportCard.findUnique({
            where: {id}
        })
        return supCard   
    }

    async update(id: string, data: UpdateSuportCardDto): Promise<SuportCard> {
        const supCardIndex = await this.prisma.suportCard.update({
            where: {id},
            data: {...data}
        })
        return supCardIndex
    }

    async delete(id: string): Promise<void> {
        console.log(id)
        await this.prisma.suportCard.delete({
            where: {id}
        })
    }
}
