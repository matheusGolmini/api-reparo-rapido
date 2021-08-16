import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressRepository } from './repositories/address.repository';
import { AddressService } from './service/address.service';

@Module({
  providers: [AddressService],
  imports: [TypeOrmModule.forFeature([AddressRepository])],
  exports: [AddressService, TypeOrmModule],
})
export class AddressModule {}
