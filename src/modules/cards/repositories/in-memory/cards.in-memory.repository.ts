
import { Injectable } from '@nestjs/common';
import { CardsRepository } from '../cards.repository';
import { Cards } from '../../entities/cards.entity';
import { CreateCardsDto } from '../../dto/create-cards.dto';
import { UpdateCardsDto } from '../../dto/update-cards.dto';

@Injectable()
export class CardsInMemoryRepository implements CardsRepository {

    private dataBaseCard: Cards[] = []

    create(data: CreateCardsDto, userId: string): Cards | Promise<Cards> {
        const newCard = new Cards()
        Object.assign(newCard, {
           ...data,
           userId,
        })
        this.dataBaseCard.push(newCard)
        return newCard
    }

    findAll(): any | Promise<any> {
        return this.dataBaseCard
    }
    
    findOne(id: string): Cards | Promise<Cards> {
        const card = this.dataBaseCard.find((card) => card.id == id)
        return card   
    }

    update(id: string, data: UpdateCardsDto): Cards | Promise<Cards> {
        const cardIndex = this.dataBaseCard.findIndex((card) => card.id === id);
    
        if (cardIndex !== -1) {
            const updatedCard: any = {
                ...this.dataBaseCard[cardIndex],
                ...data,
            };    
            this.dataBaseCard[cardIndex] = updatedCard;
    
            return this.dataBaseCard[cardIndex];
        }
        return null;
    }
    

    delete(id: string): void | Promise<void> {
        const userIndex = this.dataBaseCard.findIndex((user) => user.id == id)
        this.dataBaseCard.splice(userIndex, 1)
    }

    async deleteFileFromCard(cardId: string, fileName: string): Promise<any> {
        console.log(cardId)
        console.log(fileName)
       
      }
}
