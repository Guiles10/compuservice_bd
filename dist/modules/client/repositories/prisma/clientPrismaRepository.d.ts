import { ClientRepository } from '../client.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateClientDto } from '../../dto/create-client.dto';
import { Client } from '../../entities/client.entity';
import { UpdateClientDto } from '../../dto/update-client.dto';
export declare class ClientPrismaRepository implements ClientRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(dataClient: CreateClientDto): Promise<Client>;
    findByClientCNPJ(cnpj: string | null): Promise<any>;
    findByClientCPF(cpf: string | null): Promise<any>;
    findByClientCompanyName(companyName: string): Promise<any>;
    findByClientCodigo(codigo: string | null): Promise<any>;
    findAll(): Promise<Client[]>;
    findOne(id: string): Promise<Client>;
    update(id: string, data: UpdateClientDto): Promise<Client>;
    delete(id: string): Promise<void>;
}
