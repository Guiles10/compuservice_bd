import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Request } from '@nestjs/common';
import { SuportCardService } from './suport-card.service';
import { CreateSuportCardDto } from './dto/create-suport-card.dto';
import { UpdateSuportCardDto } from './dto/update-suport-card.dto';

@Controller('suport_card')
export class SuportCardController {
  constructor(private readonly suportCardService: SuportCardService) {}

  @Post('')
  create(@Body() createSuportCardDto: CreateSuportCardDto) {
    return this.suportCardService.create(createSuportCardDto);
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
  update(@Param('id') id: string, @Body() updateSuportCardDto: UpdateSuportCardDto) {
    return this.suportCardService.update(id, updateSuportCardDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.suportCardService.remove(id);
  }
}
