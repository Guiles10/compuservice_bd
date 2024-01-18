import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskRepository } from './repositories/task.repository';

@Injectable()
export class TaskService {
  constructor(private taskRepository: TaskRepository){}

  async create(createTaskDto: CreateTaskDto, suportCardId: string) {
    const task =  await this.taskRepository.create(createTaskDto, suportCardId)
    return task
  }

  async findAll(suportCardId: string) {
    return this.taskRepository.findAll(suportCardId)
  }

  async findOne(id: string) {
    const findTask =  await this.taskRepository.findOne(id)
    if(!findTask){
      throw new NotAcceptableException("Card Not Found!")
    }
    return findTask
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const Task = await this.taskRepository.update(id, updateTaskDto)
    if(!Task){
      throw new NotAcceptableException("Card Not Found!")
    }
    return Task
  }

  async remove(id: string) {
    const task = await this.taskRepository.findOne(id)

    if(!task){
      throw new NotAcceptableException("Card Not Found!")
    }
    await this.taskRepository.delete(id)
    return
  }
}
