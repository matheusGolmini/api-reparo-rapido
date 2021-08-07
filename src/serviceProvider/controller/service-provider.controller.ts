import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ServiceProviderService } from '../service/service-provider.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateServiceProviderDto } from '../dto/create-service-provider.dto';

@ApiTags('provider')
@Controller('provider')
export class ServiceProviderController {
  constructor(private readonly providerService: ServiceProviderService) {}

  @Post()
  create(@Body() createProviderDto: CreateServiceProviderDto) {
    return this.providerService.create(createProviderDto);
  }

  @Get()
  findAll() {
    return this.providerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.providerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProviderDto: any) {
    return this.providerService.update(+id, updateProviderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.providerService.remove(+id);
  }
}
