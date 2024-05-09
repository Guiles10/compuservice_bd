import { CardsRepository } from '../cards.repository';
import { Cards } from '../../entities/cards.entity';
import { CreateCardsDto } from '../../dto/create-cards.dto';
import { UpdateCardsDto } from '../../dto/update-cards.dto';
export declare class CardsInMemoryRepository implements CardsRepository {
    private dataBaseCard;
    create(data: CreateCardsDto, userId: string): Cards | Promise<Cards>;
    findByCardTitle(title: string): Promise<any>;
    findAll(): any | Promise<any>;
    findOne(id: string): Cards | Promise<Cards>;
    update(id: string, data: UpdateCardsDto): Cards | Promise<Cards>;
    delete(id: string): void | Promise<void>;
    deleteFileFromCard(cardId: string, fileName: string): Promise<any>;
}
