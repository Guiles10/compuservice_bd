import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Request, UseGuards } from '@nestjs/common';
import { JWTAuthGuard } from '../auth/jwt.auth.guard';
import { CardsService } from './cards.service';
import { CreateCardsDto } from './dto/create-cards.dto';
import { Cards } from './entities/cards.entity';
import { UpdateCardsDto } from './dto/update-cards.dto';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardService: CardsService) {}

  @Post('')
  @UseGuards(JWTAuthGuard)
  create(@Body() createCardsDto: CreateCardsDto, @Request() req) {
    return this.cardService.create(createCardsDto, req.user?.id);
  }

  @Get('')
  findAll() {
    return this.cardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JWTAuthGuard)
  async updateCard(@Param('id') id: string, @Body() updateCardDto: UpdateCardsDto): Promise<Cards> {
    return this.cardService.update(id, updateCardDto);
  }

  @HttpCode(204)
  @Delete(':id')
  @UseGuards(JWTAuthGuard)
  remove(@Param('id') id: string) {
    return this.cardService.remove(id);
  }

  @HttpCode(204)
  @Delete('/:cardId/:filename')
  async deleteFileFromCard(
      @Param('cardId') cardId: string,
      @Param('filename') fileName: string
  ) {
      return await this.cardService.deleteFileFromCard(cardId, fileName);
  }
}
