import { Module } from '@nestjs/common';
import { SuportCardService } from './suport-card.service';
import { SuportCardController } from './suport-card.controller';
import { SuportCardRepository } from './repositories/suportCard.repository';
import { SuportCardInMemoryRepository } from './repositories/in-memory/supCard.in-memory.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [SuportCardController],
  providers: [
    SuportCardService,
    PrismaService,
    {
      provide: SuportCardRepository,
      useClass: SuportCardInMemoryRepository,
    }
  ],
})
export class SuportCardModule {}
