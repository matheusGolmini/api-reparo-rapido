import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonBlockedService } from '../service/person-blocked.service';
import { CreatePersonBlockedDto } from '../dto/create-person-blocked.dto';
import { UpdatePersonBlockedDto } from '../dto/update-person-blocked.dto';

@Controller('person-blocked')
export class PersonBlockedController {
  constructor(private readonly personBlockedService: PersonBlockedService) {}

  @Post()
  create(@Body() createPersonBlockedDto: CreatePersonBlockedDto) {
    return this.personBlockedService.create(createPersonBlockedDto);
  }

  @Get()
  findAll() {
    return this.personBlockedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personBlockedService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePersonBlockedDto: UpdatePersonBlockedDto,
  ) {
    return this.personBlockedService.update(+id, updatePersonBlockedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personBlockedService.remove(+id);
  }
}
