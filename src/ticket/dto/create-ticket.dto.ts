import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateTicketDto {
  @IsUUID()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  idPerson: string;

  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  status: string;

  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  description: string;

  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  type: string;

  @IsUUID()
  @IsOptional()
  @ApiProperty()
  idService?: string;

  @IsUUID()
  @IsOptional()
  @ApiProperty()
  idAdmin?: string;
}
