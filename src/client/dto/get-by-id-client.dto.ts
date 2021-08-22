import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { PersonBlocked } from '../../person-blocked/entities/person-blocked.entity';
import { Person } from '../../person/entities/person.entity';

export class GetByIdClientDto {
  @IsString()
  @IsUUID()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  id: string;
}

export class IResponseClientByIdDto extends Person {
  isBlocked: boolean;
  blocked?: Partial<PersonBlocked>;
}
