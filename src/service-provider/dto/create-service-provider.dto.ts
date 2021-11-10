import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreatePersonDto } from '../../person/dto/create-person.dto';

export class CreateServiceProviderDto extends CreatePersonDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ example: '65.143.593/0001-90' })
  cnpj: string;

  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty({ example: 'https://image' })
  imageDocument: string;

  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty({ example: '123456789', type: 'string' })
  accountNumber: string;

  @IsArray()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty({ example: ['Curitiba'], type: 'array' })
  workPlaces: string[];

  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty({ example: 'Pintor' })
  skillSelected: string;
}
