import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreatePersonDto } from '../../person/dto/create-person.dto';

export class CreateServiceProviderDto extends CreatePersonDto {
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  cnpj: string;
}
