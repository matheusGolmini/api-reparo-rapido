import { PartialType } from '@nestjs/swagger';
import { CreatePersonBlockedDto } from './create-person-blocked.dto';

export class UpdatePersonBlockedDto extends PartialType(CreatePersonBlockedDto) {}
