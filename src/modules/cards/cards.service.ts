import { ConflictException, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { CardsRepository } from './repositories/cards.repository';
import { UpdateCardsDto } from './dto/update-cards.dto';
import { CreateCardsDto } from './dto/create-cards.dto'; 

@Injectable()
export class CardsService {
  constructor(private cardRepository: CardsRepository){}

  async create(createCardsDto: CreateCardsDto, userId: string) {
    const existingCard = await this.cardRepository.findByCardTitle(createCardsDto.title);
    if(existingCard) {
      throw new NotAcceptableException("Um cartão com este nome já existe.");
    }

    const suportCard =  await this.cardRepository.create(createCardsDto, userId)
    return suportCard
  }

  async findByCardTitle(title: string) {
    const cardTitle = await this.cardRepository.findByCardTitle(title)
    return cardTitle
  }

  async findAll() {
    return this.cardRepository.findAll()
  }

  async findOne(id: string) {
    const findSupCard =  await this.cardRepository.findOne(id)
    
    if(!findSupCard){
      throw new NotAcceptableException("Card não encontrado!")
    }
    return findSupCard
  }

  async update(id: string, updateCardsDto: UpdateCardsDto) {
    const existingTitle = await this.cardRepository.findOne(id);
    if (!existingTitle) {
      throw new NotFoundException('Cliente não encontrado');
    }

    if (updateCardsDto.title && updateCardsDto.title !== existingTitle.title) {
      const userWithSameName = await this.cardRepository.findByCardTitle(updateCardsDto.title);
      if (userWithSameName && userWithSameName.id !== id) {
        throw new ConflictException('Nome já está em uso!!!');
      }
    }
    const supCard = await this.cardRepository.update(id, updateCardsDto)
 
    return supCard
  }

  async remove(id: string) {
    const supCard = await this.cardRepository.findOne(id)
    
    if(!supCard){
      throw new NotAcceptableException("Card não encontrado!")
    }

    await this.cardRepository.delete(id)
    return
  }

  async deleteFileFromCard(cardId: string, fileName: string) {
    return await this.cardRepository.deleteFileFromCard(cardId, fileName);
  }
}
