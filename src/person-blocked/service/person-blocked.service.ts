import { Injectable } from '@nestjs/common';
import { CreatePersonBlockedDto } from '../dto/create-person-blocked.dto';

@Injectable()
export class PersonBlockedService {
  create(createPersonBlockedDto: CreatePersonBlockedDto) {
    return 'This action adds a new personBlocked';
  }

  remove(id: number) {
    return `This action removes a #${id} personBlocked`;
  }
}
