import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Person } from '../../person/entities/person.entity';

@Entity()
export class ServiceProvider {
  @OneToOne(() => Person, { primary: true })
  @JoinColumn({ name: 'id_service_provider' })
  idServiceProvider: string;

  @Column({ name: 'bank_account_number', type: 'int' })
  bankAccountNumber: number;

  @Column({ name: 'bank_account_agency', type: 'int' })
  bankAccountAgency: number;

  @Column({ name: 'id_approver', type: 'varchar' })
  idApprover: string;

  @Column({ type: 'boolean' })
  approved: boolean;

  @Column({ name: 'join_date', type: 'date' })
  joinDate: Date;
}
