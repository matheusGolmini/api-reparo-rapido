import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  Request,
  UseGuards,
  SetMetadata,
  Get,
} from '@nestjs/common';
import { PersonBlockedService } from '../service/person-blocked.service';
import { CreatePersonBlockedDto } from '../dto/create-person-blocked.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { Roles } from '../../shared/enum/roles';
import { RolesGuard } from '../../auth/guard/roles.guard';
import { SoftDeletePersonBlockedDto } from '../dto/soft-delete-person-blocked.dto';
import { PersonService } from 'src/person/service/person.service';

@SetMetadata('roles', [Roles.ADMIN])
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
@ApiTags('PersonBlocked')
@Controller('person-blocked')
export class PersonBlockedController {
  constructor(
    private readonly personBlockedService: PersonBlockedService,
    private readonly personService: PersonService,
  ) {}

  @Post()
  create(
    @Body() createPersonBlockedDto: CreatePersonBlockedDto,
    @Request() { user }: any,
  ) {
    this.personService.update(createPersonBlockedDto.idPerson, {
      isBlocked: true,
    });
    return this.personBlockedService.createBlocked(
      createPersonBlockedDto,
      user.id,
    );
  }

  @Get()
  get() {
    return this.personBlockedService.get();
  }

  @Get(':idPerson')
  getByIdPerson(@Param('idPerson') idPerson: string) {
    return this.personBlockedService.getByPersonId(idPerson);
  }

  @Delete()
  async remove(
    @Body() softDeletePersonBlockedDto: SoftDeletePersonBlockedDto,
    @Request() { user }: any,
  ) {
    this.personService.update(softDeletePersonBlockedDto.idPerson, {
      isBlocked: false,
    });
    await this.personBlockedService.softDeleteBlocked(
      softDeletePersonBlockedDto,
      user.id,
    );
    return { message: 'Success' };
  }
}
