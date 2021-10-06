import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateContractDto {
  @IsOptional()
  @ApiProperty()
  approved?: boolean;

  @IsOptional()
  @IsString()
  @ApiProperty()
  link?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  status?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  pago?: string;

  @IsOptional()
  @ApiProperty()
  terminatedServiceProvider?: boolean;
}
