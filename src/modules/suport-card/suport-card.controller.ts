import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Request, UseGuards } from '@nestjs/common';
import { SuportCardService } from './suport-card.service';
import { CreateSuportCardDto } from './dto/create-suport-card.dto';
import { UpdateSuportCardDto } from './dto/update-suport-card.dto';
import { JWTAuthGuard } from '../auth/jwt.auth.guard';
import { SuportCard } from './entities/suport-card.entity';

@Controller('suport_card')
export class SuportCardController {
  constructor(private readonly suportCardService: SuportCardService) {}

  @Post('')
  @UseGuards(JWTAuthGuard)
  create(@Body() createSuportCardDto: CreateSuportCardDto, @Request() req) {
    return this.suportCardService.create(createSuportCardDto, req.user?.id);
  }

  @Get('')
  findAll() {
    return this.suportCardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suportCardService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JWTAuthGuard)
  async updateCard(@Param('id') id: string, @Body() updateCardDto: UpdateSuportCardDto): Promise<SuportCard> {
    return this.suportCardService.update(id, updateCardDto);
  }

  @HttpCode(204)
  @Delete(':id')
  @UseGuards(JWTAuthGuard)
  remove(@Param('id') id: string) {
    return this.suportCardService.remove(id);
  }
}
