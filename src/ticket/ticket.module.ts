import { Module } from '@nestjs/common';
import { TicketService } from './service/ticket.service';
import { TicketController } from './controller/ticket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketRepository } from './repositories/index';

@Module({
  controllers: [TicketController],
  providers: [TicketService],
  imports: [TypeOrmModule.forFeature([TicketRepository])],
})
export class TicketModule {}
