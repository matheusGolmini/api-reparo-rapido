import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
  SetMetadata,
  Patch,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../../auth/auth.service';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { RolesGuard } from '../../auth/guard/roles.guard';
import { Roles } from '../../shared/enum/roles';
import { AdminService } from '../service/admin.service';
import { CreateAdminDto } from '../dto/create-admin.dto';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async create(@Body() createAdminDto: CreateAdminDto) {
    return await this.adminService.create(createAdminDto);
  }

  @SetMetadata('roles', [Roles.ADMIN])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @SetMetadata('roles', [Roles.ADMIN])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Patch('person/:id/reset-password')
  async resetPassword(@Param('id') id: string) {
    this.adminService.resetPassword(id);
    return { message: 'Success' };
  }
}
