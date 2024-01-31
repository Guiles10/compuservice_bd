import { CreateResponsibleDto } from "../dto/create-responsible.dto";
import { UpdateResponsibleDto } from "../dto/update-responsible.dto";
import { Responsible } from "../entities/responsible.entity";



export abstract class ResponsibleRepository {
    abstract create(data: CreateResponsibleDto, clientId: string): Promise<Responsible> | Responsible;
    abstract findAll(id: string): Promise<Responsible> | undefined | Responsible[];
    abstract findOne(id: string): Promise<Responsible> | Responsible;
    abstract update(clientId: string, responsibleId: string, updateResponsibleDto: UpdateResponsibleDto): Promise<Responsible> | Responsible;
    abstract delete(id: string): Promise<void> | void; 
}

