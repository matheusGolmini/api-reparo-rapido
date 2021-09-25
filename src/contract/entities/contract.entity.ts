import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import DefaultAttributes from '../../database/config/default.attributes';
import { Person } from '../../person/entities/person.entity';
import { ServiceProvider } from '../../service-provider/entities/service-provider.entity';

@Entity()
export class Contract extends DefaultAttributes {
  @ManyToOne(() => Person)
  @JoinColumn({ name: 'id_person' })
  idPerson: string;

  @ManyToOne(() => ServiceProvider)
  @JoinColumn({ name: 'id_service_provider' })
  idProvider: string;

  @Column('boolean')
  approved: boolean;

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

  @ManyToOne(() => Person)
  @JoinColumn({ name: 'id_admin' })
  idAdmin: string;

  @Column('varchar', { name: 'id_html', nullable: true })
  idHtml: string;
}
