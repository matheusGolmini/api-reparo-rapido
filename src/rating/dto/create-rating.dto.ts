import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateRatingDto {
  @IsString()
  @IsUUID()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  ratingPerson: string;

  @IsString()
  @IsUUID()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  ratedPerson: string;

  @IsString()
  @IsUUID()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  contract: string;

  @IsNumber()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @ApiProperty()
  rating: number;
}
