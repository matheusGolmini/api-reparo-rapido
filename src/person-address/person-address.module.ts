import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from '../address/address.module';
import { PersonAddressController } from './controller/person-address.controller';
import { PersonAddressRepository } from './repositories/person-address.repository';
import { PersonAddressService } from './service/person-address.service';

@Module({
  providers: [PersonAddressService],
  imports: [AddressModule, TypeOrmModule.forFeature([PersonAddressRepository])],
  controllers: [PersonAddressController],
  exports: [PersonAddressService, TypeOrmModule],
})
export class PersonAddressModule {}
