
import { Injectable } from '@nestjs/common';
import { SuportCardRepository } from '../suportCard.repository';
import { CreateSuportCardDto } from '../../dto/create-suport-card.dto';
import { SuportCard } from '../../entities/suport-card.entity';
import { UpdateSuportCardDto } from '../../dto/update-suport-card.dto';

@Injectable()
export class SuportCardInMemoryRepository implements SuportCardRepository {

    private dataBaseCard: SuportCard[] = []

    create(data: CreateSuportCardDto): SuportCard | Promise<SuportCard> {
        const newCard = new SuportCard()
        Object.assign(newCard, {
           ...data,
        })
        this.dataBaseCard.push(newCard)
        return newCard
    }

    findAll(): any | Promise<any> {
        return this.dataBaseCard
    }
    
    findOne(id: string): SuportCard | Promise<SuportCard> {
        const card = this.dataBaseCard.find((card) => card.id == id)
        return card   
    }

    update(id: string, data: UpdateSuportCardDto): SuportCard | Promise<SuportCard> {
        const userIndex = this.dataBaseCard.findIndex((card) => card.id == id)
        this. dataBaseCard[userIndex] = {
            ...this.dataBaseCard[userIndex],
            ...data
        }
        return this.dataBaseCard[userIndex]
    }

    delete(id: string): void | Promise<void> {
        const userIndex = this.dataBaseCard.findIndex((user) => user.id == id)
        this.dataBaseCard.splice(userIndex, 1)
    }

}
