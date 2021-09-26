import { Column, Entity } from 'typeorm';
import DefaultAttributes from '../../database/config/default.attributes';

@Entity()
export class Address extends DefaultAttributes {
  @Column({ type: 'varchar' })
  country: string;

  @Column({ type: 'varchar' })
  state: string;

  @Column({ type: 'varchar' })
  city: string;

  @Column({ type: 'varchar' })
  region: string;

  @Column({ type: 'varchar' })
  street: string;

  @Column({ type: 'varchar' })
  type: string;

  @Column({ type: 'varchar' })
  zip: string;

  @Column({ type: 'varchar' })
  number: string;

  @Column({ type: 'varchar', nullable: false })
  complement?: string;
}
