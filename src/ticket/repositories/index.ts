import { EntityRepository, Repository } from 'typeorm';
import { Ticket } from '../entities/ticket.entity';

@EntityRepository(Ticket)
export class TicketRepository extends Repository<Ticket> {
    findInfoTicket(){
        return this.query(`
        select p.first_name, t.* from ticket t
        inner join person p on t.id_person = p.id 
    `);
    }
}

