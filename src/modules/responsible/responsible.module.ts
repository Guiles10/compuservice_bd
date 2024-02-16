import { Module } from '@nestjs/common';
import { ResponsibleService } from './responsible.service';
import { ResponsibleController } from './responsible.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ResponsibleRepository } from './repositories/responsible.repository';
import { ResponsiblePrismaRepository } from './repositories/prisma/responsiblePrismaRepository';

@Module({
  controllers: [ResponsibleController],
  providers: [
    ResponsibleService,
    PrismaService,
    {
      provide: ResponsibleRepository,
      useClass: ResponsiblePrismaRepository,
    }
  ],
})
export class ResponsibleModule {}
