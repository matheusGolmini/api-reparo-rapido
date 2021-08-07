import { ApiProperty } from '@nestjs/swagger';

export class CreatePersonDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  rg: string;

  @ApiProperty()
  sex: string;

  @ApiProperty({ default: false })
  isAdmin: boolean;
}