import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonService } from '../../person/service/person.service';
import { CreateClientDto } from '../dto';
import { ClientRepository } from '../repositories/client.repository';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientRepository)
    private readonly clientRepository: ClientRepository,
    private readonly personService: PersonService,
  ) {}

  create(createClientDto: CreateClientDto) {
    return this.personService.create(createClientDto);
  }

  getByEmail(email: string) {
    return this.personService.findOnePersonByEmail(email);
  }

  getById(id: string) {
    return this.personService.findOnePersonById(id);
  }

  getAll() {
    return this.clientRepository.findAllClient();
  }
}
