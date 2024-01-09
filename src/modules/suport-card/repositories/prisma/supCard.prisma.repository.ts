
import { Injectable } from '@nestjs/common';
import { SuportCardRepository } from '../suportCard.repository';
import { CreateSuportCardDto } from '../../dto/create-suport-card.dto';
import { SuportCard } from '../../entities/suport-card.entity';
import { UpdateSuportCardDto } from '../../dto/update-suport-card.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class SuportCardPrismaRepository implements SuportCardRepository {

    constructor(private prisma: PrismaService){}

    async create(data: CreateSuportCardDto):Promise<SuportCard> {
        const card = new SuportCard()
        Object.assign(card, {
           ...data,
        })
        const newCard = await this.prisma.create_card.create({data: {...data}})
        return newCard
    }

    async findAll(): Promise<any> {
        const supCard = await this.prisma.create_card.findAll()
        return supCard
    }
    
    async findOne(id: string): Promise<SuportCard> {
        const supCard = this.prisma.create_card.findUnique({
            where: {id}
        })
        return supCard   
    }

    async update(id: string, data: UpdateSuportCardDto): Promise<SuportCard> {
        const supCardIndex = this.prisma.create_card.update({
            where: {id},
            data: {...data}
        })
        return supCardIndex
    }

    async delete(id: string): Promise<void> {
        this.prisma.create_card.delete({
            where: {id}
        })
    }
}
