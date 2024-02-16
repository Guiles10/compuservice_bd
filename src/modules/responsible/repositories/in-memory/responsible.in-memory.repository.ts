
import { Injectable } from '@nestjs/common';
import { ResponsibleRepository } from '../responsible.repository';
import { CreateResponsibleDto } from '../../dto/create-responsible.dto';
import { UpdateResponsibleDto } from '../../dto/update-responsible.dto';
import { Responsible } from '../../entities/responsible.entity';

@Injectable()
export class ResponsibleInMemoryRepository implements ResponsibleRepository {

    private dataBaseResponsible: Responsible[] = []

    create(data: CreateResponsibleDto, userId: string): Responsible | Promise<Responsible> {
        const newResponsible = new Responsible()
        Object.assign(newResponsible, {
           ...data,
        })
        this.dataBaseResponsible.push(newResponsible)
        return newResponsible
    }

    findAll(): any | Promise<any> {
        return this.dataBaseResponsible
    }
    
    findOne(id: string): Responsible | Promise<Responsible> {
        const responsible = this.dataBaseResponsible.find((card) => card.id == id)
        return responsible   
    }

    update(clientId: string, responsibleId: string, data: UpdateResponsibleDto): any | Promise<Responsible> {
    }


    delete(id: string): void | Promise<void> {
        const userIndex = this.dataBaseResponsible.findIndex((user) => user.id == id)
        this.dataBaseResponsible.splice(userIndex, 1)
    }

}
