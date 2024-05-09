import { CardsRepository } from './repositories/cards.repository';
import { UpdateCardsDto } from './dto/update-cards.dto';
import { CreateCardsDto } from './dto/create-cards.dto';
export declare class CardsService {
    private cardRepository;
    constructor(cardRepository: CardsRepository);
    create(createCardsDto: CreateCardsDto, userId: string): Promise<import("./entities/cards.entity").Cards>;
    findByCardTitle(title: string): Promise<import("./entities/cards.entity").Cards>;
    findAll(): Promise<import("./entities/cards.entity").Cards[]>;
    findOne(id: string): Promise<import("./entities/cards.entity").Cards>;
    update(id: string, updateCardsDto: UpdateCardsDto): Promise<import("./entities/cards.entity").Cards>;
    remove(id: string): Promise<void>;
    deleteFileFromCard(cardId: string, fileName: string): Promise<void>;
}
