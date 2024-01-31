import { CreateCardsDto } from "../dto/create-cards.dto";
import { UpdateCardsDto } from "../dto/update-cards.dto";
import { Cards } from "../entities/cards.entity";

export abstract class CardsRepository {
    abstract create(data: CreateCardsDto, userId: string): Promise<Cards> | Cards;
    abstract findAll(): Promise<Cards[]> | undefined | Cards[];
    abstract findOne(id: string): Promise<Cards> | Cards;
    abstract update(id: string, data: UpdateCardsDto): Promise<Cards> | Cards;
    abstract delete(id: string): Promise<void> | void; 
}

