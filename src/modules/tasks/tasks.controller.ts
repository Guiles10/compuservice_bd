import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JWTAuthGuard } from '../auth/jwt.auth.guard';
import { TaskService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TaskService) {}

  @Post(':id')
  @UseGuards(JWTAuthGuard)
  create(@Body() createTaskDto: CreateTaskDto, @Param('id') suportCardId: string,) {
    return this.taskService.create(createTaskDto, suportCardId);
  }
  
  @Get(':id')
  findAll(@Param('id') suportCardId: string) {
    return this.taskService.findAll(suportCardId)
  }

  @Get(':id')
  findOne(@Param('id') suportCardId: string) {
    return this.taskService.findOne(suportCardId);
  }

  @Patch(':idsc/:idt')
  @UseGuards(JWTAuthGuard)
  update(@Param('idsc') suportCardId: string, @Param('idt') taskId: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(suportCardId, taskId, updateTaskDto);
  }

  @Delete(':id')
  @UseGuards(JWTAuthGuard)
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}
