import { CardsService } from './cards.service';
import { CreateCardsDto } from './dto/create-cards.dto';
import { Cards } from './entities/cards.entity';
import { UpdateCardsDto } from './dto/update-cards.dto';
export declare class CardsController {
    private readonly cardService;
    constructor(cardService: CardsService);
    create(createCardsDto: CreateCardsDto, req: any): Promise<Cards>;
    findAll(): Promise<Cards[]>;
    findOne(id: string): Promise<Cards>;
    updateCard(id: string, updateCardDto: UpdateCardsDto): Promise<Cards>;
    remove(id: string): Promise<void>;
    deleteFileFromCard(cardId: string, fileName: string): Promise<void>;
}
