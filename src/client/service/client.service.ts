import { Injectable } from '@nestjs/common';
import { PersonService } from '../../person/service/person.service';
import { CreateClientDto } from '../dto/create-client.dto';

@Injectable()
export class ClientService {
  constructor(private readonly personService: PersonService) {}

  create(createClientDto: CreateClientDto) {
    return this.personService.create(createClientDto);
  }
}
