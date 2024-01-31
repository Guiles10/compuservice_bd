import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ClientRepository } from './repositories/client.repository';
import { ClientPrismaRepository } from './repositories/prisma/clientPrismaRepository';

@Module({
  controllers: [ClientController],
  providers: [
    ClientService,
    PrismaService,
    {
      provide: ClientRepository,
      useClass: ClientPrismaRepository,
    }
  ],
})
export class ClientModule {}
