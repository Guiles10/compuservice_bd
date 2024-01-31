import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateResponsibleDto } from './dto/create-responsible.dto';
import { UpdateResponsibleDto } from './dto/update-responsible.dto';
import { ResponsibleRepository } from './repositories/responsible.repository';

@Injectable()
export class ResponsibleService {
  constructor(private responsibleRepository: ResponsibleRepository){}

  async create(createResponsibleDto: CreateResponsibleDto, clientId: string) {
    const responsible =  await this.responsibleRepository.create(createResponsibleDto, clientId)
    return responsible
  }

  async findAll(clientId: string) {
    return this.responsibleRepository.findAll(clientId)
  }

  async findOne(id: string) {
    const findResponsible =  await this.responsibleRepository.findOne(id)
    if(!findResponsible){
      // throw new this.responsibleRepository("Responsible Not Found!")
    }
    return findResponsible
  }

  async update(suportClientId: string, responsibleId: string, updateResponsibleDto: UpdateResponsibleDto) {
    const responsible = await this.responsibleRepository.update(suportClientId, responsibleId, updateResponsibleDto)
    if(!responsible){
      throw new NotAcceptableException("Responsible Not Found!")
    }
    return responsible
  }

  async remove(id: string) {
    const responsible = await this.responsibleRepository.findOne(id)

    if(!responsible){
      throw new NotAcceptableException("Responsible Not Found!")
    }
    await this.responsibleRepository.delete(id)
    return
  }
}
