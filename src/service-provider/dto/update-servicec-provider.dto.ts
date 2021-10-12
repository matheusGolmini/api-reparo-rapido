import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import { CreateServiceProviderDto } from './create-service-provider.dto';

export class UpdateServiceProviderDto extends PartialType(
  CreateServiceProviderDto,
) {
  @IsArray()
  @ApiProperty({ example: ['https://image.service'], type: 'array' })
  imageServices?: string[];
}
