import { CreateTaskDto } from "../dto/create-task.dto";
import { UpdateTaskDto } from "../dto/update-task.dto";
import { Task } from "../entities/task.entity";



export abstract class TaskRepository {
    abstract create(data: CreateTaskDto, suportCardId: string): Promise<Task> | Task;
    abstract findAll(id: string): Promise<Task> | undefined | Task[];
    abstract findOne(id: string): Promise<Task> | Task;
    abstract update(suportCardId: string, taskId: string, updateTaskDto: UpdateTaskDto): Promise<Task> | Task;
    abstract delete(id: string): Promise<void> | void; 
}

