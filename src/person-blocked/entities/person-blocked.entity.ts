import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import DefaultAttributes from '../../database/config/default.attributes';
import { Person } from '../../person/entities/person.entity';

@Entity()
export class PersonBlocked extends DefaultAttributes {
  @Column({ type: 'varchar', name: 'blocker_description' })
  blockerDescription: string;

  @Column({ type: 'varchar', name: 'unlock_description' })
  unlockDescription: string;

  @Column({ type: 'uuid', name: 'id_person' })
  idPerson: string;

  @Column({ type: 'uuid', name: 'id_person_blocker' })
  idPersonBlocker: string;

  @Column({ type: 'uuid', name: 'id_person_unlocker' })
  idPersonUnlocker: string;

  @Column({ type: 'boolean', default: true, name: 'is_blocked' })
  isBlocked: boolean;

  @ManyToOne(() => Person, (person) => person.id)
  @JoinColumn({
    name: 'id_person',
  })
  person: Person;

  @ManyToOne(() => Person, (person) => person.id)
  @JoinColumn({
    name: 'id_person_blocker',
  })
  personBlocker: Person;

  @ManyToOne(() => Person, (person) => person.id)
  @JoinColumn({
    name: 'id_person_unlocker',
  })
  personUnlocker;
}
