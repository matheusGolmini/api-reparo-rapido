import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiceProviderSkillService } from '../service/service-provider-skill.service';
import { CreateServiceProviderSkillDto } from '../dto/create-service-provider-skill.dto';
import { UpdateServiceProviderSkillDto } from '../dto/update-service-provider-skill.dto';

@Controller('service-provider-skill')
export class ServiceProviderSkillController {
  constructor(private readonly serviceProviderSkillService: ServiceProviderSkillService) {}

  @Post()
  create(@Body() createServiceProviderSkillDto: CreateServiceProviderSkillDto) {
    return this.serviceProviderSkillService.create(createServiceProviderSkillDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceProviderSkillService.findOne(id);
  }

  @Get(':id')
  findAllByServiceProvider(@Param('serviceProviderId') id: string) {
    return this.serviceProviderSkillService.findByServiceProviderId(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceProviderSkillDto: UpdateServiceProviderSkillDto) {
    return this.serviceProviderSkillService.update(id, updateServiceProviderSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceProviderSkillService.remove(id);
  }
}
