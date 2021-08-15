import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonAddressRepository } from '../repositories/person-address.repository';

@Injectable()
export class PersonAddressService {
  constructor(
    @InjectRepository(PersonAddressRepository)
    private readonly personAddressRepository: PersonAddressRepository,
  ) {}

  create(idPerson: string, idAddress: string) {
    return this.personAddressRepository.save({ idPerson, idAddress });
  }
}
