import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskRepository } from './repositories/task.repository';
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: TaskRepository);
    create(createTaskDto: CreateTaskDto, suportCardId: string): Promise<import("./entities/task.entity").Task>;
    findAll(suportCardId: string): Promise<import("./entities/task.entity").Task | import("./entities/task.entity").Task[]>;
    findOne(id: string): Promise<import("./entities/task.entity").Task>;
    update(suportCardId: string, taskId: string, updateTaskDto: UpdateTaskDto): Promise<import("./entities/task.entity").Task>;
    remove(id: string): Promise<void>;
}
