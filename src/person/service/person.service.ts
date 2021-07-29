import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from '../entities/person.entity';
import { PersonRepository } from '../repositories/person.repository';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(PersonRepository)
    private readonly personRepository: PersonRepository,
  ) {}

  findOnePerson(email: string): Promise<Person> {
    return this.personRepository.findOne({ where: { email } });
  }
}
