import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import DefaultAttributes from '../../database/config/default.attributes';
import { Person } from '../../person/entities/person.entity';

@Entity()
export class PersonBlocked extends DefaultAttributes {
  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'uuid', name: 'id_person' })
  idPerson: string;

  @Column({ type: 'uuid', default: true, name: 'is_blocked' })
  isBlocked: boolean;

  @ManyToOne(() => Person, (person) => person.id)
  @JoinColumn({
    name: 'id_person',
  })
  person: Person;
}
