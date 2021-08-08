import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreatePersonBlockedDto {
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  description: string;

  @IsString()
  @IsUUID()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  idPerson: string;
}
