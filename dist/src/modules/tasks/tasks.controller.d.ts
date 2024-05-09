import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from './tasks.service';
export declare class TasksController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: CreateTaskDto, suportCardId: string): Promise<import("./entities/task.entity").Task>;
    findAll(suportCardId: string): Promise<import("./entities/task.entity").Task | import("./entities/task.entity").Task[]>;
    findOne(suportCardId: string): Promise<import("./entities/task.entity").Task>;
    update(suportCardId: string, taskId: string, updateTaskDto: UpdateTaskDto): Promise<import("./entities/task.entity").Task>;
    remove(id: string): Promise<void>;
}
