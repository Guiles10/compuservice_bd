import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards, HttpCode } from '@nestjs/common';
import { JWTAuthGuard } from '../auth/jwt.auth.guard';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('')
  @UseGuards(JWTAuthGuard)
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }

  @Get('')
  @UseGuards(JWTAuthGuard)
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':id')
  @UseGuards(JWTAuthGuard)
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JWTAuthGuard)
  async updateCard(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto): Promise<Client> {
    return this.clientService.update(id, updateClientDto);
  }

  @HttpCode(204)
  @Delete(':id')
  @UseGuards(JWTAuthGuard)
  remove(@Param('id') id: string) {
    return this.clientService.remove(id);
  }
}
