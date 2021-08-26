import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSkillDto {
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  description: string;

  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  imageUrl: string;
}
