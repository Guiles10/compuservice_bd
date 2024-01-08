import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { SuportCardModule } from './modules/suport-card/suport-card.module';

@Module({
  imports: [UsersModule, AuthModule, SuportCardModule],
})
export class AppModule {}
