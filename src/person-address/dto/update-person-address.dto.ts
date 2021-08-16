import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { CreatePersonAddressBodyDto } from './create-person-address.dto';

export class UpdatePersonAddressBodyDto extends CreatePersonAddressBodyDto {}

export class UpdatePersonAddressDtoParamDTO {
  @ApiProperty()
  @IsString()
  @IsUUID()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  idAddress: string;
}
