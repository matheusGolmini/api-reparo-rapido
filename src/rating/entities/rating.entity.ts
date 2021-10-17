import { Contract } from 'src/contract/entities/contract.entity';
import DefaultAttributes from 'src/database/config/default.attributes';
import { Person } from 'src/person/entities/person.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Rating extends DefaultAttributes {
  @Column({ name: 'id_rated', type: 'varchar' })
  @ManyToOne(() => Person, { primary: true })
  @JoinColumn({ name: 'id_rated' })
  ratedPerson: string;

  @Column({ name: 'id_rating', type: 'varchar' })
  @ManyToOne(() => Person, { primary: true })
  @JoinColumn({ name: 'id_rating' })
  ratingPerson: string;

  @Column({ name: 'rating', type: 'numeric' })
  rating: number;

  @Column({ name: 'id_contract', type: 'varchar' })
  @ManyToOne(() => Contract, { primary: true })
  @JoinColumn({ name: 'id_contract' })
  contract: string;
}
