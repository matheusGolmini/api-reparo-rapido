import { Module } from '@nestjs/common';
import { ServiceProviderService } from './service/service-provider.service';
import { ServiceProviderController } from './controller/service-provider.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { ServiceProviderRepository } from './repositories/service-provider.repository';
import { PersonModule } from '../person/person.module';
import { AdpterBcrypt } from '../utils/Encrypeter/bcrypt.adpter';
import { AdpterValidatorDocument } from '../utils/ValidatorDocument/cpf-cnpj-validator.adapter';

@Module({
  controllers: [ServiceProviderController],
  imports: [
    AuthModule,
    PersonModule,
    TypeOrmModule.forFeature([ServiceProviderRepository]),
  ],
  providers: [ServiceProviderService, AdpterBcrypt, AdpterValidatorDocument],
})
export class ProviderModule {}
