import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  lastName: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  phone: string;

  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  cpf: string;

  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  rg: string;

  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  sex: string;
}
