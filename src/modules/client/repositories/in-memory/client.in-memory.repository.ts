
import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../client.repository';
import { CreateClientDto } from '../../dto/create-client.dto';
import { Client } from '../../entities/client.entity';
import { UpdateClientDto } from '../../dto/update-client.dto';

@Injectable()
export class CardsInMemoryRepository implements ClientRepository {

    private dataBaseClient: Client[] = []

    create(data: CreateClientDto): Client | Promise<Client> {
        const client = new Client()
        Object.assign(client, {
           ...data
        })
        this.dataBaseClient.push(client)
        return client
    }

    async findByClientCNPJ(cnpj: string): Promise<any> {
    }
    async findByClientCompanyName(companyName: string): Promise<any> {
    }
    async findByClientCodigo(codigo: string): Promise<any> {
    }

    findAll(): any | Promise<Client> {
        return this.dataBaseClient
    }
    
    findOne(id: string): Client | Promise<Client> {
        const client = this.dataBaseClient.find((card) => card.id == id)
        return client   
    }

    update(id: string, data: UpdateClientDto): Client | Promise<Client> {
        const clientIndex = this.dataBaseClient.findIndex((client) => client.id === id);
    
        if (clientIndex !== -1) {
            const updateClient: any = {
                ...this.dataBaseClient[clientIndex],
                ...data,
            };    
            this.dataBaseClient[clientIndex] = updateClient;
    
            return this.dataBaseClient[clientIndex];
        }
        return null;
    }
    

    delete(id: string): void | Promise<void> {
        const userIndex = this.dataBaseClient.findIndex((user) => user.id == id)
        this.dataBaseClient.splice(userIndex, 1)
        //Teste 
    }

}
