import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Person } from '../../person/entities/person.entity';

@Entity()
export class ServiceProvider {
  @OneToOne(() => Person, { primary: true, eager: true })
  @JoinColumn({ name: 'id_service_provider' })
  idServiceProvider: string;

  @Column({ name: 'id_person_approver', type: 'varchar', nullable: true })
  idApprover: string;

  @Column({ type: 'boolean', default: false })
  approved: boolean;

  @Column({ type: 'varchar', nullable: true })
  cnpj: string;

  @Column({ name: 'join_date', type: 'date', nullable: true })
  joinDate: Date;

  @Column({ name: 'image_document', type: 'varchar', nullable: true })
  imageDocument?: string;

  @Column({
    name: 'image_services',
    type: 'varchar',
    array: true,
    nullable: true,
  })
  imageServices?: string[];

  @Column({ name: 'account_number', type: 'varchar', nullable: true })
  accountNumber?: string;

  @Column({ name: 'work_places', type: 'varchar', array: true, nullable: true })
  workPlaces?: string[];

  @Column({ type: 'varchar', name: 'description_not_approved', nullable: true })
  descriptionNotApproved: string;

  @ManyToOne(() => Person, (person) => person.id)
  @JoinColumn({
    name: 'id_person_approver',
  })
  person: Person;
}
