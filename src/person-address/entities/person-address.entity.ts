import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Address } from '../../address/entities/address.entity';
import { Person } from '../../person/entities/person.entity';

@Entity()
export class PersonAddress {
  @ManyToOne(() => Person, { primary: true })
  @JoinColumn({ name: 'id_person' })
  idPerson: string;

  @Column({ name: 'id_address' })
  idAddress: string;

  @ManyToOne(() => Address, { primary: true, eager: true })
  @JoinColumn({ name: 'id_address' })
  Address: Address;
}
