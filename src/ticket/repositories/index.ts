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

    findInfoTicketId(id){
        return this.query(`
        select t.*,p.email,p.phone,p.first_name,p.last_name from ticket t
        inner join person p on t.id_person = p.id 
        where t.id = '`+id+`'`
       );
    }
}

