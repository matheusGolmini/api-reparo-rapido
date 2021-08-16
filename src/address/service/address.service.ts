import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdatePersonAddressBodyDto } from '../../person-address/dto/update-person-address.dto';
import { CreateAddressBodyDto } from '../dto/create-address.dto';
import { AddressRepository } from '../repositories/address.repository';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressRepository)
    private readonly addressRepository: AddressRepository,
  ) {}

  create(createAddressDto: CreateAddressBodyDto) {
    return this.addressRepository.save(createAddressDto);
  }

  delete(idAddress: string) {
    return this.addressRepository.delete(idAddress);
  }

  update(idAddress: string, address: UpdatePersonAddressBodyDto) {
    return this.addressRepository.update({ id: idAddress }, address);
  }
}
