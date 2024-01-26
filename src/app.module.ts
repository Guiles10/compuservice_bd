import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { SuportCardModule } from './modules/suport-card/suport-card.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { CommentsModule } from './modules/comments/comments.module';

@Module({
  imports: [UsersModule, AuthModule, SuportCardModule, TasksModule, CommentsModule],
})
export class AppModule {}
