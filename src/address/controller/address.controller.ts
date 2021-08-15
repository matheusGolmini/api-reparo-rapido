import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateAddressDto } from '../dto/create-address.dto';
import { AddressService } from '../service/address.service';

@ApiTags('Address')
@Controller('Address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post(':idPerson')
  async create(
    @Body() createAdminDto: CreateAddressDto,
    @Param('idPerson') idPerson: string,
  ) {
    return await this.addressService.create(createAdminDto, idPerson);
  }

  @Get(':idPerson')
  async get(@Body() createAdminDto: any, @Param('idPerson') idPerson: string) {
    return await this.addressService.create(createAdminDto, idPerson);
  }
}
