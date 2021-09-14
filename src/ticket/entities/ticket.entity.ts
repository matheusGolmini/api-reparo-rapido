import { AfterInsert, Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import DefaultAttributes from '../../database/config/default.attributes';
import { Person } from '../../person/entities/person.entity';

@Entity()
export class Ticket extends DefaultAttributes {
  @ManyToOne(() => Person)
  @JoinColumn({ name: 'id_person' })
  idPerson: string;

  @Column('varchar')
  status: string;

  @Column('varchar')
  description: string;

  @Column('varchar')
  type: string;

  @Column('uuid', { name: 'id_service' })
  idService: string;

  @ManyToOne(() => Person)
  @JoinColumn({ name: 'id_admin' })
  idAdmin: string;

  @Column('varchar',{name: 'id_html', nullable: true})
  idHtml: string;
}
