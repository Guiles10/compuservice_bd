import { Module } from '@nestjs/common';
import { TaskService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { PrismaService } from '../../database/prisma.service';
import { TaskRepository } from './repositories/task.repository';
import { TaskPrismaRepository } from './repositories/prisma/tasksPrismaRepository';

@Module({
  controllers: [TasksController],
  providers: [
    TaskService,
    PrismaService,
    {
      provide: TaskRepository,
      useClass: TaskPrismaRepository,
    }
  ],
})
export class TasksModule {}
