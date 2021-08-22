import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class RejectedServiceProviderDto {
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  description: string;
}
