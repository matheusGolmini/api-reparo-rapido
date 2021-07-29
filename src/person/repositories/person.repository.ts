import { EntityRepository, Repository } from 'typeorm';
import { Person } from '../../person/entities/person.entity';

@EntityRepository(Person)
export class PersonRepository extends Repository<Person> {}
