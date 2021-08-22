import { EntityRepository, Repository } from 'typeorm';
import { Person } from '../../person/entities/person.entity';

@EntityRepository(Person)
export class ClientRepository extends Repository<Person> {
  findAllClient(): Promise<Person[]> {
    return this.query(`
        SELECT * FROM person p
        WHERE NOT EXISTS (
            SELECT * FROM service_provider 
            WHERE p.id = id_service_provider
        )
    `);
  }
}
