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
import { SkillsService } from '../service/skill.service';
import { CreateSkillDto } from '../dto/create-skill.dto';
import { UpdateSkillDto } from '../dto/update-skill.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../../shared/enum/roles';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { RolesGuard } from '../../auth/guard/roles.guard';

@ApiTags('Skill')
@Controller('skill')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @SetMetadata('roles', [Roles.ADMIN])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Post()
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillsService.create(createSkillDto);
  }

  @Get()
  findAll() {
    return this.skillsService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillsService.findOne(id);
  }

  @SetMetadata('roles', [Roles.ADMIN])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    return this.skillsService.update(id, updateSkillDto);
  }

  @SetMetadata('roles', [Roles.ADMIN])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillsService.remove(id);
  }
}
