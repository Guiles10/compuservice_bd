
import { Injectable } from '@nestjs/common';

import { CreateTaskDto } from '../../dto/create-task.dto';
import { UpdateTaskDto } from '../../dto/update-task.dto';
import { TaskRepository } from '../task.repository';
import { Task } from '../../entities/task.entity';

@Injectable()
export class TaskInMemoryRepository implements TaskRepository {

    private dataBaseTasks: Task[] = []

    create(data: CreateTaskDto, userId: string): Task | Promise<Task> {
        const newCard = new Task()
        Object.assign(newCard, {
           ...data,
           userId,
        })
        this.dataBaseTasks.push(newCard)
        return newCard
    }

    findAll(): any | Promise<any> {
        return this.dataBaseTasks
    }
    
    findOne(id: string): Task | Promise<Task> {
        const card = this.dataBaseTasks.find((card) => card.id == id)
        return card   
    }

    update(suportCardId: string, taskId: string, data: UpdateTaskDto): any | Promise<any> {
    }



    delete(id: string): void | Promise<void> {
        const userIndex = this.dataBaseTasks.findIndex((user) => user.id == id)
        this.dataBaseTasks.splice(userIndex, 1)
    }

}
