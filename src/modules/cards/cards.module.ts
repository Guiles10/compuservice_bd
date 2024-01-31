import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CardsPrismaRepository } from './repositories/prisma/cardsPrismaRepository';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { CardsRepository } from './repositories/cards.repository';

@Module({
  controllers: [CardsController], 
  providers: [
    CardsService,
    PrismaService,
    {
      provide: CardsRepository,
      useClass: CardsPrismaRepository,
    }
  ],
})
export class CardsModule {}
