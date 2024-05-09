import { CardsRepository } from '../cards.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCardsDto } from '../../dto/create-cards.dto';
import { Cards } from '../../entities/cards.entity';
import { UpdateCardsDto } from '../../dto/update-cards.dto';
export declare class CardsPrismaRepository implements CardsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateCardsDto, userId: string): Promise<Cards>;
    findByCardTitle(title: string): Promise<any>;
    findAll(): Promise<Cards[]>;
    findOne(id: string): Promise<Cards>;
    update(id: string, data: UpdateCardsDto): Promise<Cards>;
    delete(id: string): Promise<void>;
    deleteFileFromCard(cardId: string, fileName: string): Promise<any>;
}
