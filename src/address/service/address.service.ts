import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
}
