import { Module } from '@nestjs/common';
import { ServiceProviderSkillService } from './service/service-provider-skill.service';
import { ServiceProviderSkillController } from './controller/service-provider-skill.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceProviderSkillRepository } from './repositories/service-provider-skill.repository';

@Module({
  controllers: [ServiceProviderSkillController],
  providers: [ServiceProviderSkillService],
  imports: [TypeOrmModule.forFeature([ServiceProviderSkillRepository])],
  exports: [ServiceProviderSkillService, TypeOrmModule],
})
export class ServiceProviderSkillModule {}
