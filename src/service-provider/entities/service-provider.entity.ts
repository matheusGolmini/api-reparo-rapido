import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Person } from '../../person/entities/person.entity';

@Entity()
export class ServiceProvider {
  @OneToOne(() => Person, { primary: true, eager: true })
  @JoinColumn({ name: 'id_service_provider' })
  idServiceProvider: string;

  @Column({ name: 'id_approver', type: 'varchar', nullable: true })
  idApprover: string;

  @Column({ type: 'boolean', default: false })
  approved: boolean;

  @Column({ name: 'join_date', type: 'date', nullable: true })
  joinDate: Date;
}
