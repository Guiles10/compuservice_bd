import { CreateSuportCardDto } from "../dto/create-suport-card.dto";
import { UpdateSuportCardDto } from "../dto/update-suport-card.dto";
import { SuportCard } from "../entities/suport-card.entity";


export abstract class SuportCardRepository {
    abstract create(data: CreateSuportCardDto, userId: string): Promise<SuportCard> | SuportCard;
    abstract findAll(): Promise<SuportCard> | undefined | SuportCard[];
    abstract findOne(id: string): Promise<SuportCard> | SuportCard;
    abstract update(id: string, data: UpdateSuportCardDto): Promise<SuportCard> | SuportCard;
    abstract delete(id: string): Promise<void> | void; 
}

