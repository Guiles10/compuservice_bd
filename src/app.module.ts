import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { CommentsModule } from './modules/comments/comments.module';
import { CardsModule } from './modules/cards/cards.module';

@Module({
  imports: [UsersModule, AuthModule, TasksModule, CommentsModule, CardsModule],
})
export class AppModule {}
