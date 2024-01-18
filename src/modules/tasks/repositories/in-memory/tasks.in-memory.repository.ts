
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

    update(id: string, data: UpdateTaskDto): Task | Promise<Task> {
        const cardIndex = this.dataBaseTasks.findIndex((card) => card.id === id);
    
        if (cardIndex !== -1) {
            const updatedCard: any = {
                ...this.dataBaseTasks[cardIndex],
                ...data,
            };
    
            // if (data.tasks) {
            //     updatedCard.tasks = data.tasks.map((task) => task.task);
            //     // Adicione um loop para atualizar o estado das tarefas
            //     data.tasks.forEach((task, index) => {
            //         updatedCard.tasks[index] = {
            //             task: task.task,
            //             completed: task.completed,
            //         };
            //     });
            // }
    
            this.dataBaseTasks[cardIndex] = updatedCard;
    
            return this.dataBaseTasks[cardIndex];
        }
    
        // Retorne algo ou lance uma exceção se o card não for encontrado
        // (Dependendo dos requisitos da sua aplicação)
        return null;
    }
    

    delete(id: string): void | Promise<void> {
        const userIndex = this.dataBaseTasks.findIndex((user) => user.id == id)
        this.dataBaseTasks.splice(userIndex, 1)
    }

}
