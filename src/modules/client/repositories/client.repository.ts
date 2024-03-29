import { CreateClientDto } from "../dto/create-client.dto";
import { UpdateClientDto } from "../dto/update-client.dto";
import { Client } from "../entities/client.entity";

export abstract class ClientRepository {
    abstract create(data: CreateClientDto): Promise<Client> | Client;
    abstract findByClientCodigo(codigo: string): Promise<Client> | Client;
    abstract findByClientCNPJ(cnpj: string): Promise<Client> | Client;
    abstract findByClientCompanyName(companyName: string): Promise<Client> | Client;
    abstract findOne(id: string): Promise<Client> | Client;
    abstract findAll(): Promise<Client[]> | undefined | Client[];
    abstract update(id: string, data: UpdateClientDto): Promise<Client> | Client;
    abstract delete(id: string): Promise<void> | void; 
}

