import { Controller, Post, Body, UseGuards, Param, Get } from '@nestjs/common';
import { ClientService } from '../service/client.service';
import { CreateClientDto } from '../dto/create-client.dto';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { GetByEmailClientDto } from '../dto/get-by-email-client.dto';
import { GetByIdClientDto } from '../dto/get-by-id-client.dto';

@ApiTags('Client')
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('email/:email')
  getByEmail(@Param() { email }: GetByEmailClientDto) {
    return this.clientService.getByEmail(email);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('id/:id')
  getById(@Param() { id }: GetByIdClientDto) {
    return this.clientService.getById(id);
  }
}
