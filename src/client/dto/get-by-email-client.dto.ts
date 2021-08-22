import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class GetByEmailClientDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  email: string;
}
