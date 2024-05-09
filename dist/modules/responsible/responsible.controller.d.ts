import { ResponsibleService } from './responsible.service';
import { CreateResponsibleDto } from './dto/create-responsible.dto';
import { UpdateResponsibleDto } from './dto/update-responsible.dto';
export declare class ResponsibleController {
    private readonly responsibleService;
    constructor(responsibleService: ResponsibleService);
    create(createResponsibleDto: CreateResponsibleDto, clientId: string): Promise<import("./entities/responsible.entity").Responsible>;
    findAll(clientId: string): Promise<import("./entities/responsible.entity").Responsible | import("./entities/responsible.entity").Responsible[]>;
    findOne(suportClientId: string): Promise<import("./entities/responsible.entity").Responsible>;
    update(suportClientId: string, responsibleId: string, updateResponsibleDto: UpdateResponsibleDto): Promise<import("./entities/responsible.entity").Responsible>;
    remove(id: string): Promise<void>;
}
