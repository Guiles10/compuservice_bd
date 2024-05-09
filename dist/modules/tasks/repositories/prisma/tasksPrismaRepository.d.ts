import { PrismaService } from 'src/database/prisma.service';
import { TaskRepository } from '../task.repository';
import { CreateTaskDto } from '../../dto/create-task.dto';
import { Task } from '../../entities/task.entity';
import { UpdateTaskDto } from '../../dto/update-task.dto';
export declare class TaskPrismaRepository implements TaskRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateTaskDto, cardsId: string): Promise<Task>;
    findAll(suportCardId: string): Promise<any>;
    findOne(id: string): Promise<any>;
    update(cardsId: string, taskId: string, data: UpdateTaskDto): Promise<any>;
    delete(id: string): Promise<void>;
}
