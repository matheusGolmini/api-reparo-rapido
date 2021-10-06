import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import DefaultAttributes from '../../database/config/default.attributes';
import { Person } from '../../person/entities/person.entity';
import { ServiceProvider } from '../../service-provider/entities/service-provider.entity';

@Entity()
export class Contract extends DefaultAttributes {
  @Column('varchar', { name: 'id_person' })
  idPerson: string;

  @Column('varchar', { name: 'id_service_provider' })
  idProvider: string;

  @ManyToOne(() => Person, { eager: true })
  @JoinColumn({ name: 'id_person' })
  Person: string;

  @ManyToOne(() => ServiceProvider, { eager: true })
  @JoinColumn({ name: 'id_service_provider' })
  Provider: string;

  @Column('boolean')
  approved: boolean;

  @Column('boolean', { name: 'terminated_service_provider' })
  terminatedServiceProvider: boolean;

  @Column('boolean')
  pago: string;

  @Column('varchar')
  longDescription: string;

  @Column('varchar')
  briefDescription: string;

  @Column('varchar')
  startDate: string;

  @Column('varchar')
  endDate: string;

  @Column('varchar')
  amountServiceProvider: string;

  @Column('varchar')
  amountTotal: string;

  @Column('varchar')
  amountApp: string;

  @Column('varchar')
  agreement: string;

  @Column('varchar')
  link: string;

  @Column('varchar')
  status: string;

  @ManyToOne(() => Person)
  @JoinColumn({ name: 'id_admin' })
  idAdmin: string;

  @Column('varchar', { name: 'id_html', nullable: true })
  idHtml: string;

  public constructor(options?: Partial<Contract>) {
    super();
    Object.assign(this, options);
  }
}
