import { Module } from '@nestjs/common';
import { SuportCardService } from './suport-card.service';
import { SuportCardController } from './suport-card.controller';

@Module({
  controllers: [SuportCardController],
  providers: [SuportCardService],
})
export class SuportCardModule {}
