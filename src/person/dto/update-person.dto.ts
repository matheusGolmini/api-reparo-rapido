import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { CreatePersonDto } from './create-person.dto';

export class UpdatePersonDto extends PartialType(CreatePersonDto) {
  @IsBoolean()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty({ default: false })
  isBlocked: boolean;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ default: 0 })
  rating?: number;
}
