import { ConflictException, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientRepository } from './repositories/client.repository';

@Injectable()
export class ClientService {
  constructor(private clientRepository: ClientRepository){}

  async create(createClientDto: CreateClientDto) {
    if (await this.clientRepository.findByClientCNPJ(createClientDto.cnpj)) {
      throw new NotAcceptableException("CNPJ já cadastrado");
    }
    if (await this.clientRepository.findByClientCompanyName(createClientDto.companyName)) {
      throw new NotAcceptableException("Razão Social já cadastrado");
    }
    if (await this.clientRepository.findByClientCodigo(createClientDto.codigo)) {
      throw new NotAcceptableException("Código já cadastrado");
    }

    const client =  await this.clientRepository.create(createClientDto)
    return client
  }

  async findByClientCNPJ(cnpj: string) {
    return await this.clientRepository.findByClientCNPJ(cnpj)
  }
  async findByClientCompanyName(companyName: string) {
    return await this.clientRepository.findByClientCompanyName(companyName)
  }
  async findByClientCodigo(codigo: string) {
    return await this.clientRepository.findByClientCodigo(codigo)
  }

  async findAll() {
    return this.clientRepository.findAll()
  }

  async findOne(id: string) {
    const findClient =  await this.clientRepository.findOne(id)
    if(!findClient){
      throw new NotAcceptableException("Client não encontrado!")
    }
    return findClient
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const existingClient = await this.clientRepository.findOne(id);
    if (!existingClient) {
      throw new NotFoundException('Usuario não encontrado');
    }

    if (updateClientDto.cnpj && updateClientDto.cnpj !== existingClient.cnpj) {
      const clientWithSameCNPJ = await this.clientRepository.findByClientCNPJ(updateClientDto.cnpj);
      if (clientWithSameCNPJ && clientWithSameCNPJ.id !== id) {
        throw new ConflictException('CNPJ já está em uso!');
      }
    }
    if (updateClientDto.companyName && updateClientDto.companyName !== existingClient.companyName) {
      const clientWithSameCompanyName = await this.clientRepository.findByClientCompanyName(updateClientDto.companyName);
      if (clientWithSameCompanyName && clientWithSameCompanyName.id !== id) {
        throw new ConflictException('E-mail já está em uso!');
      }
    }
    if (updateClientDto.codigo && updateClientDto.codigo !== existingClient.codigo) {
      const clientWithSameCodigo = await this.clientRepository.findByClientCodigo(updateClientDto.codigo);
      if (clientWithSameCodigo && clientWithSameCodigo.id !== id) {
        throw new ConflictException('Código já está em uso!');
      }
    }

    const client = await this.clientRepository.update(id, updateClientDto)
    return client
  }

  async remove(id: string) {
    const client = await this.clientRepository.findOne(id)
    if(!client){
      throw new NotAcceptableException("Client não encontrado!")
    }
    await this.clientRepository.delete(id)
    return
  }
}
