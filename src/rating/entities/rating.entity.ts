import { Contract } from "src/contract/entities/contract.entity";
import DefaultAttributes from "src/database/config/default.attributes";
import { Person } from "src/person/entities/person.entity";
import { Column, JoinColumn, ManyToOne } from "typeorm";

export class Rating extends DefaultAttributes {
    @ManyToOne(() => Person, { primary: true })
    @JoinColumn({ name: 'id_person' })
    ratedPerson: string;

    @ManyToOne(() => Person, { primary: true })
    @JoinColumn({ name: 'id_person' })
    ratingPerson: string;

    @Column({ name: 'rating' })
    rating: number;

    @ManyToOne(() => Contract, { primary: true })
    @JoinColumn({ name: 'id_contract' })
    contract: Contract;
}
