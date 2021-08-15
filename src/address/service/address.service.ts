import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonAddressService } from '../../person-address/service/person-address.service';
import { CreateAddressBodyDto } from '../dto/create-address.dto';
import { AddressRepository } from '../repositories/address.repository';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressRepository)
    private readonly addressRepository: AddressRepository,
    private readonly personAddressService: PersonAddressService,
  ) {}

  async create(createAddressDto: CreateAddressBodyDto, idPerson: string) {
    const newAddress = await this.addressRepository.save(createAddressDto);
    await this.personAddressService.create(idPerson, newAddress.id);
    return newAddress;
  }
}
