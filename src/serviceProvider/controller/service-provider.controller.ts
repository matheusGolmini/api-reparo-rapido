import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { ServiceProviderService } from '../service/service-provider.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateServiceProviderDto } from '../dto/create-service-provider.dto';
import { Roles } from '../../shared/enum/roles';
import { RolesGuard } from '../../auth/guard/roles.guard';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';

@ApiTags('provider')
@Controller('provider')
export class ServiceProviderController {
  constructor(private readonly providerService: ServiceProviderService) {}

  @Post()
  create(@Body() createProviderDto: CreateServiceProviderDto) {
    return this.providerService.create(createProviderDto);
  }

  @SetMetadata('roles', [Roles.ADMIN])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Get('waiting-for-approval')
  findAll() {
    return this.providerService.findWaitingForApproval();
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.providerService.findOne(id);
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
