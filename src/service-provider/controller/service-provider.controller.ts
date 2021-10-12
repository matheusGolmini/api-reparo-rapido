import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  SetMetadata,
  UseGuards,
  Request,
  Patch,
} from '@nestjs/common';
import { ServiceProviderService } from '../service/service-provider.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateServiceProviderDto } from '../dto/create-service-provider.dto';
import { Roles } from '../../shared/enum/roles';
import { RolesGuard } from '../../auth/guard/roles.guard';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { RejectedServiceProviderDto } from '../dto/rejected-service-provider';
import { UpdateServiceProviderDto } from '../dto/update-servicec-provider.dto';

@ApiTags('Provider')
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

  @SetMetadata('roles', [Roles.ADMIN])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Get('approved')
  findAllApproved() {
    return this.providerService.findApproved();
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.providerService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProviderDto: UpdateServiceProviderDto,
  ) {
    await this.providerService.update(id, updateProviderDto);
    return { message: 'Success' };
  }

  @SetMetadata('roles', [Roles.ADMIN])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Patch(':id/approved')
  async approved(@Param('id') id: string, @Request() { user }: any) {
    await this.providerService.approved(id, user.id);
    return { message: 'Success' };
  }

  @SetMetadata('roles', [Roles.ADMIN])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Patch(':id/rejected')
  async rejected(
    @Param('id') id: string,
    @Body() data: RejectedServiceProviderDto,
    @Request() { user }: any,
  ) {
    await this.providerService.rejected(id, user.id, data.description);
    return { message: 'Success' };
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProviderDto: any) {
  //   return this.providerService.update(+id, updateProviderDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.providerService.remove(+id);
  // }
}
