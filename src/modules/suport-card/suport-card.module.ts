import { Module } from '@nestjs/common';
import { SuportCardService } from './suport-card.service';
import { SuportCardController } from './suport-card.controller';
import { SuportCardRepository } from './repositories/suportCard.repository';
import { SuportCardInMemoryRepository } from './repositories/in-memory/supCard.in-memory.repository';
import { PrismaService } from 'src/database/prisma.service';
import { SuportCardPrismaRepository } from './repositories/prisma/supCard.prisma.repository';

@Module({
  controllers: [SuportCardController],
  providers: [
    SuportCardService,
    PrismaService,
    {
      provide: SuportCardRepository,
      useClass: SuportCardPrismaRepository,
    }
  ],
})
export class SuportCardModule {}
