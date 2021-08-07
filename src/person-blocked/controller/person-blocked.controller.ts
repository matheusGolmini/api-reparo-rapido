import { Controller, Post, Body, Param, Delete } from '@nestjs/common';
import { PersonBlockedService } from '../service/person-blocked.service';
import { CreatePersonBlockedDto } from '../dto/create-person-blocked.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PersonBlocked')
@Controller('person-blocked')
export class PersonBlockedController {
  constructor(private readonly personBlockedService: PersonBlockedService) {}

  @Post()
  create(@Body() createPersonBlockedDto: CreatePersonBlockedDto) {
    return this.personBlockedService.create(createPersonBlockedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personBlockedService.remove(+id);
  }
}
