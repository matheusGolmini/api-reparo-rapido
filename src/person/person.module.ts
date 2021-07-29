import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonRepository } from './repositories/person.repository';
import { PersonService } from './service/person.service';

@Module({
  providers: [PersonService],
  imports: [TypeOrmModule.forFeature([PersonRepository])],
  exports: [PersonService, TypeOrmModule],
})
export class PersonModule {}
