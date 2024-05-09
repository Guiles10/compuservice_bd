import { CreateResponsibleDto } from './dto/create-responsible.dto';
import { UpdateResponsibleDto } from './dto/update-responsible.dto';
import { ResponsibleRepository } from './repositories/responsible.repository';
export declare class ResponsibleService {
    private responsibleRepository;
    constructor(responsibleRepository: ResponsibleRepository);
    create(createResponsibleDto: CreateResponsibleDto, clientId: string): Promise<import("./entities/responsible.entity").Responsible>;
    findAll(clientId: string): Promise<import("./entities/responsible.entity").Responsible | import("./entities/responsible.entity").Responsible[]>;
    findOne(id: string): Promise<import("./entities/responsible.entity").Responsible>;
    update(suportClientId: string, responsibleId: string, updateResponsibleDto: UpdateResponsibleDto): Promise<import("./entities/responsible.entity").Responsible>;
    remove(id: string): Promise<void>;
}
