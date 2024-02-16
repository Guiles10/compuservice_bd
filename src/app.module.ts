import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { CommentsModule } from './modules/comments/comments.module';
import { CardsModule } from './modules/cards/cards.module';
import { ClientModule } from './modules/client/client.module';
import { ResponsibleModule } from './modules/responsible/responsible.module';
import { FileModule } from './modules/file/file.module';

@Module({
  imports: [UsersModule, AuthModule, TasksModule, CommentsModule, CardsModule, ClientModule, ResponsibleModule, FileModule],
})
export class AppModule {}
