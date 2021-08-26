import { Column, Entity } from 'typeorm';
import DefaultAttributes from '../../database/config/default.attributes';

@Entity()
export class Skill extends DefaultAttributes {
  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;

  @Column('varchar', { name: 'image_url' })
  imageUrl: string;
}
