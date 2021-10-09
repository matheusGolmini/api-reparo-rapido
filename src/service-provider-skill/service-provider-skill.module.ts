import { Module } from '@nestjs/common';
import { ServiceProviderSkillService } from './service/service-provider-skill.service';
import { ServiceProviderSkillController } from './controller/service-provider-skill.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceProviderSkillRepository } from './repositories/service-provider-skill.repository';
import { PersonAddressModule } from '../person-address/person-address.module';

@Module({
  controllers: [ServiceProviderSkillController],
  providers: [ServiceProviderSkillService],
  imports: [
    PersonAddressModule,
    TypeOrmModule.forFeature([ServiceProviderSkillRepository]),
  ],
  exports: [ServiceProviderSkillService, TypeOrmModule],
})
export class ServiceProviderSkillModule {}
