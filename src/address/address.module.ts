import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonAddressModule } from '../person-address/person-address.module';
import { AddressController } from './controller/address.controller';
import { AddressRepository } from './repositories/address.repository';
import { AddressService } from './service/address.service';

@Module({
  providers: [AddressService],
  controllers: [AddressController],
  imports: [PersonAddressModule, TypeOrmModule.forFeature([AddressRepository])],
})
export class AddressModule {}
