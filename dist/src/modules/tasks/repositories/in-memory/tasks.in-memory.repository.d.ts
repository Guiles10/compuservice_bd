import { CreateTaskDto } from '../../dto/create-task.dto';
import { UpdateTaskDto } from '../../dto/update-task.dto';
import { TaskRepository } from '../task.repository';
import { Task } from '../../entities/task.entity';
export declare class TaskInMemoryRepository implements TaskRepository {
    private dataBaseTasks;
    create(data: CreateTaskDto, userId: string): Task | Promise<Task>;
    findAll(): any | Promise<any>;
    findOne(id: string): Task | Promise<Task>;
    update(suportCardId: string, taskId: string, data: UpdateTaskDto): any | Promise<any>;
    delete(id: string): void | Promise<void>;
}
