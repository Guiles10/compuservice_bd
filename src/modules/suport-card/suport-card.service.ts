import { Injectable } from '@nestjs/common';
import { CreateSuportCardDto } from './dto/create-suport-card.dto';
import { UpdateSuportCardDto } from './dto/update-suport-card.dto';

@Injectable()
export class SuportCardService {
  create(createSuportCardDto: CreateSuportCardDto) {
    return 'This action adds a new suportCard';
  }

  findAll() {
    return `This action returns all suportCard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} suportCard`;
  }

  update(id: number, updateSuportCardDto: UpdateSuportCardDto) {
    return `This action updates a #${id} suportCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} suportCard`;
  }
}
