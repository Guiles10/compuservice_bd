import { ResponsibleRepository } from '../responsible.repository';
import { CreateResponsibleDto } from '../../dto/create-responsible.dto';
import { UpdateResponsibleDto } from '../../dto/update-responsible.dto';
import { Responsible } from '../../entities/responsible.entity';
export declare class ResponsibleInMemoryRepository implements ResponsibleRepository {
    private dataBaseResponsible;
    create(data: CreateResponsibleDto, userId: string): Responsible | Promise<Responsible>;
    findAll(): any | Promise<any>;
    findOne(id: string): Responsible | Promise<Responsible>;
    update(clientId: string, responsibleId: string, data: UpdateResponsibleDto): any | Promise<Responsible>;
    delete(id: string): void | Promise<void>;
}
