import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CardsRepository } from './repositories/suportCard.repository';
import { UpdateCardsDto } from './dto/update-cards.dto';
import { CreateCardsDto } from './dto/create-cards.dto';

@Injectable()
export class CardsService {
  constructor(private cardRepository: CardsRepository){}

  async create(createCardsDto: CreateCardsDto, userId: string) {
    const suportCard =  await this.cardRepository.create(createCardsDto, userId)
    return suportCard
  }

  async findAll() {
    return this.cardRepository.findAll()
  }

  async findOne(id: string) {
    const findSupCard =  await this.cardRepository.findOne(id)
    if(!findSupCard){
      throw new NotAcceptableException("Card Not Found!")
    }
    return findSupCard
  }

  async update(id: string, updateCardsDto: UpdateCardsDto) {
    const supCard = await this.cardRepository.update(id, updateCardsDto)
    if(!supCard){
      throw new NotAcceptableException("Card Not Found!")
    }
    return supCard
  }

  async remove(id: string) {
    const supCard = await this.cardRepository.findOne(id)
    
    if(!supCard){
      throw new NotAcceptableException("Card Not Found!")
    }
    await this.cardRepository.delete(id)
    return
  }
}
