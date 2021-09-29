import { Module } from '@nestjs/common';
import { ServiceProviderSkillService } from './service/service-provider-skill.service';
import { ServiceProviderSkillController } from './controller/service-provider-skill.controller';

@Module({
  controllers: [ServiceProviderSkillController],
  providers: [ServiceProviderSkillService]
})
export class ServiceProviderSkillModule {}
