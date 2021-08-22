import { Module } from '@nestjs/common';
import { ClientService } from './service/client.service';
import { ClientController } from './controller/client.controller';
import { PersonModule } from '../person/person.module';

@Module({
  controllers: [ClientController],
  providers: [ClientService],
  imports: [PersonModule],
})
export class ClientModule {}
