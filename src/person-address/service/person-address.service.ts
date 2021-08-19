import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from '../../address/entities/address.entity';
import { AddressService } from '../../address/service/address.service';
import { UpdatePersonAddressBodyDto } from '../dto/update-person-address.dto';
import { PersonAddressRepository } from '../repositories/person-address.repository';

@Injectable()
export class PersonAddressService {
  constructor(
    @InjectRepository(PersonAddressRepository)
    private readonly personAddressRepository: PersonAddressRepository,
    private readonly addressService: AddressService,
  ) {}

  async create(address: any, idPerson: string): Promise<Address> {
    const newAddress = await this.addressService.create(address);
    await this.personAddressRepository.save({
      idAddress: newAddress.id,
      idPerson,
    });
    return newAddress;
  }

  getByIdPerson(idPerson: string) {
    return this.personAddressRepository.find({ where: { idPerson } });
  }

  async delete(idAddress: string): Promise<void> {
    await this.personAddressRepository.delete({ idAddress });
    this.addressService.delete(idAddress);
  }

  updated(idAddress: string, address: UpdatePersonAddressBodyDto) {
    return this.addressService.update(idAddress, address);
  }
}
