import { Controller, Post, Body } from '@nestjs/common';
import { ClientService } from '../service/client.service';
import { CreateClientDto } from '../dto/create-client.dto';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('Client')
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }
}
