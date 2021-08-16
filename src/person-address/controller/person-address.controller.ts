import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  CreatePersonAddressDtoParamDTO,
  CreatePersonAddressBodyDto,
} from '../dto/create-person-address.dto';
import { PersonAddressService } from '../service/person-address.service';

@ApiTags('PersonAddress')
@Controller('person-address')
export class PersonAddressController {
  constructor(private readonly personAddressService: PersonAddressService) {}

  @Post(':idPerson')
  async create(
    @Body() createAdminDto: CreatePersonAddressBodyDto,
    @Param() { idPerson }: CreatePersonAddressDtoParamDTO,
  ) {
    return await this.personAddressService.create(createAdminDto, idPerson);
  }

  //   @Get(':idPerson')
  //   async get(@Param() { idPerson }: CreateAddressDtoParamDTO) {
  //     // return await this.addressService.create(idPerson);
  //   }
}
