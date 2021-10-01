import { Module } from '@nestjs/common';
import { ServiceProviderService } from './service/service-provider.service';
import { ServiceProviderController } from './controller/service-provider.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { ServiceProviderRepository } from './repositories/service-provider.repository';
import { PersonModule } from '../person/person.module';
import { AdpterBcrypt } from '../adapters/Encrypeter/bcrypt.adpter';
import { AdpterValidatorDocument } from '../adapters/ValidatorDocument/cpf-cnpj-validator.adapter';
import { PersonBlockedModule } from '../person-blocked/person-blocked.module';
import { SkillsModule } from '../skill/skills.module';
import { ServiceProviderSkillModule } from '../service-provider-skill/service-provider-skill.module';

@Module({
  controllers: [ServiceProviderController],
  imports: [
    AuthModule,
    PersonModule,
    PersonBlockedModule,
    SkillsModule,
    ServiceProviderSkillModule,
    TypeOrmModule.forFeature([ServiceProviderRepository]),
  ],
  providers: [ServiceProviderService, AdpterBcrypt, AdpterValidatorDocument],
  exports: [ServiceProviderService, TypeOrmModule],
})
export class ProviderModule {}
