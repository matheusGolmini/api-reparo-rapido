import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonBlockedService } from '../../person-blocked/service/person-blocked.service';
import { PersonService } from '../../person/service/person.service';
import { CreateClientDto, IResponseClientByIdDto } from '../dto';
import { ClientRepository } from '../repositories/client.repository';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientRepository)
    private readonly clientRepository: ClientRepository,
    private readonly personService: PersonService,
    private readonly personBlockedService: PersonBlockedService,
  ) {}

  create(createClientDto: CreateClientDto) {
    return this.personService.create(createClientDto);
  }

  getByEmail(email: string) {
    return this.personService.findOnePersonByEmail(email);
  }

  async getById(id: string): Promise<IResponseClientByIdDto> {
    const person = await this.personService.findOnePersonById(id);
    const response: IResponseClientByIdDto = {
      ...person,
      isBlocked: false,
    };
    const personBlocked = await this.personBlockedService.getByPersonId(id);
    if (personBlocked) {
      response.isBlocked = true;
      response.blocked = personBlocked;
    }
    return response;
  }

  getAll() {
    return this.clientRepository.findAllClient();
  }
}
