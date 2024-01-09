import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateSuportCardDto } from './dto/create-suport-card.dto';
import { UpdateSuportCardDto } from './dto/update-suport-card.dto';
import { SuportCardRepository } from './repositories/suportCard.repository';

@Injectable()
export class SuportCardService {
  constructor(private suportCardRepository: SuportCardRepository){}

  async create(createSuportCardDto: CreateSuportCardDto) {
    const suportCard =  await this.suportCardRepository.create(createSuportCardDto)
    return suportCard
  }

  async findAll() {
    return this.suportCardRepository.findAll()
  }

  async findOne(id: string) {
    const findSupCard =  await this.suportCardRepository.findOne(id)
    if(!findSupCard){
      throw new NotAcceptableException("Card Not Found!")
    }
    return findSupCard
  }

  async update(id: string, updateSuportCardDto: UpdateSuportCardDto) {
    const supCard = await this.suportCardRepository.update(id, updateSuportCardDto)
    if(!supCard){
      throw new NotAcceptableException("Card Not Found!")
    }
    return supCard
  }

  async remove(id: string) {
    const supCard = await this.suportCardRepository.findOne(id)
    
    if(!supCard){
      throw new NotAcceptableException("Card Not Found!")
    }
    await this.suportCardRepository.delete(id)
    return
  }
}
