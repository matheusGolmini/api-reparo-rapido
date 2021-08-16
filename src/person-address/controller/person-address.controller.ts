import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  CreatePersonAddressDtoParamDTO,
  CreatePersonAddressBodyDto,
} from '../dto/create-person-address.dto';
import { DeletePersonAddressByIdAddressDtoParamDTO } from '../dto/delete-person-address-by-id-address.dto';
import { GetPersonAddressByIdPersonDtoParamDTO } from '../dto/get-person-address-by-id-person.dto';
import {
  UpdatePersonAddressBodyDto,
  UpdatePersonAddressDtoParamDTO,
} from '../dto/update-person-address.dto';
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

  @Get(':idPerson')
  async get(@Param() { idPerson }: GetPersonAddressByIdPersonDtoParamDTO) {
    return await this.personAddressService.getByIdPerson(idPerson);
  }

  @Delete(':idAddress')
  async delete(
    @Param() { idAddress }: DeletePersonAddressByIdAddressDtoParamDTO,
  ): Promise<void> {
    await this.personAddressService.delete(idAddress);
  }

  @Put(':idAddress')
  async update(
    @Body() updateAddress: UpdatePersonAddressBodyDto,
    @Param() { idAddress }: UpdatePersonAddressDtoParamDTO,
  ) {
    await this.personAddressService.updated(idAddress, updateAddress);
  }
}
