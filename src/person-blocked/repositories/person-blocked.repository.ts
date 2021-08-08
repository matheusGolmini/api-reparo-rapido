import { EntityRepository, Repository } from 'typeorm';
import { PersonBlocked } from '../entities/person-blocked.entity';

@EntityRepository(PersonBlocked)
export class PersonBlockedRepository extends Repository<PersonBlocked> {}
