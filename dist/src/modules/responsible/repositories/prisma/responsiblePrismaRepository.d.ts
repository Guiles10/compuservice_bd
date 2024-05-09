import { PrismaService } from 'src/database/prisma.service';
import { ResponsibleRepository } from '../responsible.repository';
import { Responsible } from '../../entities/responsible.entity';
import { CreateResponsibleDto } from '../../dto/create-responsible.dto';
import { UpdateResponsibleDto } from '../../dto/update-responsible.dto';
export declare class ResponsiblePrismaRepository implements ResponsibleRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateResponsibleDto, clientId: string): Promise<Responsible>;
    findAll(suportClientId: string): Promise<any>;
    findOne(id: string): Promise<any>;
    update(clientId: string, responsibleId: string, data: UpdateResponsibleDto): Promise<any>;
    delete(id: string): Promise<void>;
}
