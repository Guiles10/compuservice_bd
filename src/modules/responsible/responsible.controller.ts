import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ResponsibleService } from './responsible.service';
import { CreateResponsibleDto } from './dto/create-responsible.dto';
import { UpdateResponsibleDto } from './dto/update-responsible.dto';
import { JWTAuthGuard } from '../auth/jwt.auth.guard';

@Controller('responsible')
export class ResponsibleController {
  constructor(private readonly responsibleService: ResponsibleService) {}

  @Post(':id')
  @UseGuards(JWTAuthGuard)
  create(@Body() createResponsibleDto: CreateResponsibleDto, @Param('id') clientId: string,) {
    return this.responsibleService.create(createResponsibleDto, clientId);
  }

  @Get(':id')
  @UseGuards(JWTAuthGuard)
  findAll(@Param('id') clientId: string) {
    return this.responsibleService.findAll(clientId)
  }

  @Get(':id')
  @UseGuards(JWTAuthGuard)
  findOne(@Param('id') suportClientId: string) {
    return this.responsibleService.findOne(suportClientId);
  }

  @Patch(':idc/:idr')
  @UseGuards(JWTAuthGuard)
  update(@Param('idsc') suportClientId: string, @Param('idr') responsibleId: string, @Body() updateResponsibleDto: UpdateResponsibleDto) {
    return this.responsibleService.update(suportClientId, responsibleId, updateResponsibleDto);
  }

  @Delete(':id')
  @UseGuards(JWTAuthGuard)
  remove(@Param('id') id: string) {
    return this.responsibleService.remove(id);
  }
}
