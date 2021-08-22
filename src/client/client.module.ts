import { Module } from '@nestjs/common';
import { ClientService } from './service/client.service';
import { ClientController } from './controller/client.controller';
import { PersonModule } from '../person/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientRepository } from './repositories/client.repository';

@Module({
  controllers: [ClientController],
  providers: [ClientService],
  imports: [PersonModule, TypeOrmModule.forFeature([ClientRepository])],
})
export class ClientModule {}
