
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TaskRepository } from '../task.repository';
import { CreateTaskDto } from '../../dto/create-task.dto';
import { Task } from '../../entities/task.entity';
import { UpdateTaskDto } from '../../dto/update-task.dto';

@Injectable()
export class TaskPrismaRepository implements TaskRepository {

    constructor(private prisma: PrismaService){} 

    async create(data: CreateTaskDto, cardsId: string):Promise<Task> {
        const tasks = new Task()
        Object.assign(tasks, {
            ...data,
            completed: data.completed || false
        })
        const newTasks = await this.prisma.task.create({
            data: { ...tasks, cardsId }
        })
        return newTasks
    }


    async findAll(suportCardId: string): Promise<any> {
        const allTasks = await this.prisma.cards.findMany({
            where: {
                id: suportCardId,
            },
                include: {
                    tasks: true
                },
        });
        return allTasks;
    }

    async findOne(id: string): Promise<any> {
        const supCard = await this.prisma.task.findUnique({
            where: { id }
        });
        return supCard;
    }

    async update(cardsId: string, taskId: string, data: UpdateTaskDto): Promise<any> {
        const taskIndex = await this.prisma.task.update({
            where: { id: taskId },
            data: {
                ...data,
            },
        });
        return taskIndex;
    }

    async delete(id: string): Promise<void> {
        await this.prisma.task.delete({
            where: { id }
        });
    }
}
