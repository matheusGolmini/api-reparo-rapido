import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class DeletePersonAddressByIdAddressDtoParamDTO {
  @ApiProperty()
  @IsString()
  @IsUUID()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  idAddress: string;
}
