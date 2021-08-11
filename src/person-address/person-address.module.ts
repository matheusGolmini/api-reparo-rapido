import { Module } from '@nestjs/common';
import { PersonAddressService } from './person-address.service';

@Module({
  providers: [PersonAddressService],
})
export class PersonAddressModule {}
