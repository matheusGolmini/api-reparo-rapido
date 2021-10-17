import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import DefaultAttributes from '../../database/config/default.attributes';
import { PersonBlocked } from '../../person-blocked/entities/person-blocked.entity';

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

  @Column({ type: 'varchar', name: 'image_profile', nullable: false })
  imageProfile?: string;

  @Column({ type: 'varchar', nullable: true })
  id_html: string;

  @Column({ type: 'varchar' })
  sex: string;

  @Column({ type: 'boolean', name: 'is_admin', default: false })
  isAdmin: boolean;

  @Column({ type: 'boolean', name: 'is_blocked', default: false })
  isBlocked: boolean;

  @Column({ type: 'numeric', name: 'rating', default: 0 })
  rating: number;

  @OneToMany(() => PersonBlocked, (personBlocked) => personBlocked.person)
  @JoinColumn({ name: 'id_person' })
  personBlocked: PersonBlocked[];
}
