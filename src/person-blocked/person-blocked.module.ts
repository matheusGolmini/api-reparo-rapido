import { Module } from '@nestjs/common';
import { PersonBlockedService } from './service/person-blocked.service';
import { PersonBlockedController } from './controller/person-blocked.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonBlockedRepository } from './repositories/person-blocked.repository';
import { PersonModule } from 'src/person/person.module';

@Module({
  controllers: [PersonBlockedController],
  providers: [PersonBlockedService],
  imports: [TypeOrmModule.forFeature([PersonBlockedRepository]), PersonModule],
  exports: [TypeOrmModule, PersonBlockedService],
})
export class PersonBlockedModule {}
