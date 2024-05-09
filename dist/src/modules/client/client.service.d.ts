import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientRepository } from './repositories/client.repository';
export declare class ClientService {
    private clientRepository;
    constructor(clientRepository: ClientRepository);
    create(createClientDto: CreateClientDto): Promise<import("./entities/client.entity").Client>;
    findByClientCNPJ(cnpj: string | null): Promise<import("./entities/client.entity").Client>;
    findByClientCPF(cpf: string | null): Promise<import("./entities/client.entity").Client>;
    findByClientCompanyName(companyName: string): Promise<import("./entities/client.entity").Client>;
    findByClientCodigo(codigo: string | null): Promise<import("./entities/client.entity").Client>;
    findAll(): Promise<import("./entities/client.entity").Client[]>;
    findOne(id: string): Promise<import("./entities/client.entity").Client>;
    update(id: string, updateClientDto: UpdateClientDto): Promise<import("./entities/client.entity").Client>;
    remove(id: string): Promise<void>;
}
