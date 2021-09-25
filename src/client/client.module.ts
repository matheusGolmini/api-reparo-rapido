import { Module } from '@nestjs/common';
import { ClientService } from './service/client.service';
import { ClientController } from './controller/client.controller';
import { PersonModule } from '../person/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientRepository } from './repositories/client.repository';
import { PersonBlockedModule } from '../person-blocked/person-blocked.module';

@Module({
  controllers: [ClientController],
  providers: [ClientService],
  imports: [
    PersonBlockedModule,
    PersonModule,
    TypeOrmModule.forFeature([ClientRepository]),
  ],
  exports: [ClientService, TypeOrmModule],
})
export class ClientModule {}
