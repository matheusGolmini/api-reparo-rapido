import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonBlockedService } from '../../person-blocked/service/person-blocked.service';
import { PersonService } from '../../person/service/person.service';
import { AdpterBcrypt } from '../../adapters/Encrypeter/bcrypt.adpter';
import {
  CreateClientDto,
  IResponseClientByIdDto,
  UpdateClientDto,
} from '../dto';
import { ClientRepository } from '../repositories/client.repository';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientRepository)
    private readonly clientRepository: ClientRepository,
    private readonly personService: PersonService,
    private readonly personBlockedService: PersonBlockedService,
    private readonly adpterBcrypt: AdpterBcrypt,
  ) {}

  create(createClientDto: CreateClientDto) {
    createClientDto.password = this.adpterBcrypt.encrypt(
      createClientDto.password,
    );
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

  async upadate(id: string, data: UpdateClientDto): Promise<void> {
    if (data.password) {
      data.password = this.adpterBcrypt.encrypt(data.password);
    }

    const { affected } = await this.clientRepository.update(id, data);

    if (affected === 0) {
      throw new HttpException(
        'Id informado para fazer atualização não foi encontrado',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
