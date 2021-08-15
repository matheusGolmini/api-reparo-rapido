import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonAddressRepository } from './repositories/person-address.repository';
import { PersonAddressService } from './service/person-address.service';

@Module({
  providers: [PersonAddressService],
  imports: [TypeOrmModule.forFeature([PersonAddressRepository])],
  exports: [PersonAddressService, TypeOrmModule],
})
export class PersonAddressModule {}
