import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePersonDto } from '../dto/create-person.dto';
import { Person } from '../entities/person.entity';
import { PersonRepository } from '../repositories/person.repository';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(PersonRepository)
    private readonly personRepository: PersonRepository,
  ) {}

  findOnePersonByEmail(email: string): Promise<Person> {
    return this.personRepository.findOne({ where: { email } });
  }

  findOneLogin(email: string): Promise<Person> {
    return this.personRepository
      .createQueryBuilder('person')
      .leftJoinAndSelect('person.personBlocked', 'personBlocked')
      .where('person.email = :email', { email })
      .addSelect('person.password')
      .getOne();
  }

  async create(values: CreatePersonDto): Promise<Person> {
    return await this.personRepository.save(values);
  }
}
