import { Column, Entity } from 'typeorm';
import DefaultAttributes from '../../database/config/default.attributes';

@Entity()
export class Person extends DefaultAttributes {
  @Column({ type: 'varchar', name: 'first_name' })
  firstName: string;

  @Column({ type: 'varchar', name: 'last_name' })
  lastName: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  phone: string;

  @Column({ type: 'varchar', select: false })
  password: string;

  @Column({ type: 'varchar' })
  cpf: string;

  @Column({ type: 'varchar' })
  rg: string;

  @Column({ type: 'varchar', nullable: true })
  id_html: string;

  @Column({ type: 'varchar' })
  sex: string;

  @Column({ type: 'boolean', name: 'is_admin', default: false })
  isAdmin: boolean;
}
