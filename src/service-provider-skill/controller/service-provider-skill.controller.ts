import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ServiceProviderSkillService } from '../service/service-provider-skill.service';
import { CreateServiceProviderSkillDto } from '../dto/create-service-provider-skill.dto';
import { UpdateServiceProviderSkillDto } from '../dto/update-service-provider-skill.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';

@ApiTags('ServiceProviderSkill')
@Controller('service-provider-skill')
export class ServiceProviderSkillController {
  constructor(
    private readonly serviceProviderSkillService: ServiceProviderSkillService,
  ) {}

  @Post()
  create(@Body() createServiceProviderSkillDto: CreateServiceProviderSkillDto) {
    return this.serviceProviderSkillService.create(
      createServiceProviderSkillDto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceProviderSkillService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get(':id')
  findAllByServiceProvider(@Param('serviceProviderId') id: string) {
    return this.serviceProviderSkillService.findByServiceProviderId(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateServiceProviderSkillDto: UpdateServiceProviderSkillDto,
  ) {
    return this.serviceProviderSkillService.update(
      id,
      updateServiceProviderSkillDto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceProviderSkillService.remove(id);
  }
}
