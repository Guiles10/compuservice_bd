import { ClientRepository } from '../client.repository';
import { CreateClientDto } from '../../dto/create-client.dto';
import { Client } from '../../entities/client.entity';
import { UpdateClientDto } from '../../dto/update-client.dto';
export declare class CardsInMemoryRepository implements ClientRepository {
    private dataBaseClient;
    create(data: CreateClientDto): Client | Promise<Client>;
    findByClientCNPJ(cnpj: string): Promise<any>;
    findByClientCPF(cpf: string): Promise<any>;
    findByClientCompanyName(companyName: string): Promise<any>;
    findByClientCodigo(codigo: string): Promise<any>;
    findAll(): any | Promise<Client>;
    findOne(id: string): Client | Promise<Client>;
    update(id: string, data: UpdateClientDto): Client | Promise<Client>;
    delete(id: string): void | Promise<void>;
}
