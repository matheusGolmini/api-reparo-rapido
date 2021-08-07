import { Injectable } from '@nestjs/common';
import { CreatePersonBlockedDto } from '../dto/create-person-blocked.dto';
import { UpdatePersonBlockedDto } from '../dto/update-person-blocked.dto';

@Injectable()
export class PersonBlockedService {
  create(createPersonBlockedDto: CreatePersonBlockedDto) {
    return 'This action adds a new personBlocked';
  }

  findAll() {
    return `This action returns all personBlocked`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personBlocked`;
  }

  update(id: number, updatePersonBlockedDto: UpdatePersonBlockedDto) {
    return `This action updates a #${id} personBlocked`;
  }

  remove(id: number) {
    return `This action removes a #${id} personBlocked`;
  }
}
