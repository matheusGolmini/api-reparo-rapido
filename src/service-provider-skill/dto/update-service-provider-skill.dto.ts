import { PartialType } from '@nestjs/swagger';
import { CreateServiceProviderSkillDto } from './create-service-provider-skill.dto';

export class UpdateServiceProviderSkillDto extends PartialType(CreateServiceProviderSkillDto) {}
