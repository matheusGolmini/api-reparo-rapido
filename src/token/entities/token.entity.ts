import { Column, Entity } from 'typeorm';
import DefaultAttributes from '../../database/config/default.attributes';

@Entity()
export class Token extends DefaultAttributes {
  @Column({ type: 'varchar', length: 255 })
  hash: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'uuid' })
  idPerson: string;
}
