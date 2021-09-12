import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTicketDto } from '../dto/create-ticket.dto';
import { UpdateTicketDto } from '../dto/update-ticket.dto';
import { TicketRepository } from '../repositories/index';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(TicketRepository)
    private readonly repositoryTicket: TicketRepository,
  ) {}

  create(createTicketDto: CreateTicketDto) {

    return this.repositoryTicket.save(createTicketDto);
  }

  findAll() {
    return this.repositoryTicket.findInfoTicket();
  }

  findOne(id: string) {
    return this.repositoryTicket.findInfoTicketId(id);
  }

  async update(id: string, updateTicketDto: UpdateTicketDto) {
    const { affected } = await this.repositoryTicket.update(
      { id },
      updateTicketDto,
    );

    return affected === 0 ? { success: false } : { success: true };
  }

  remove(id: string) {
    return this.repositoryTicket.softDelete({ id });
  }
}
