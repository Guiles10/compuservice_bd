import { Module } from '@nestjs/common';
import { TaskService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { PrismaService } from 'src/database/prisma.service';
import { TaskRepository } from './repositories/task.repository';
import { TaskPrismaRepository } from './repositories/prisma/tasksPrismaRepository';
import { TaskInMemoryRepository } from './repositories/in-memory/tasks.in-memory.repository';

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
