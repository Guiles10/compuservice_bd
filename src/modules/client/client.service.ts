import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientRepository } from './repositories/client.repository';

@Injectable()
export class ClientService {
  constructor(private clientRepository: ClientRepository){}

  async create(createClientDto: CreateClientDto) {
    const client =  await this.clientRepository.create(createClientDto)
    return client
  }

  async findAll() {
    return this.clientRepository.findAll()
  }

  async findOne(id: string) {
    const findClient =  await this.clientRepository.findOne(id)
    if(!findClient){
      throw new NotAcceptableException("Client Not Found!")
    }
    return findClient
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const client = await this.clientRepository.update(id, updateClientDto)
    if(!client){
      throw new NotAcceptableException("Client Not Found!")
    }
    return client
  }

  async remove(id: string) {
    const client = await this.clientRepository.findOne(id)
    if(!client){
      throw new NotAcceptableException("Client Not Found!")
    }
    await this.clientRepository.delete(id)
    return
  }
}
