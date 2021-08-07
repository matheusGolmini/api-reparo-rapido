import { Module } from '@nestjs/common';
import { ServiceProviderService } from './service/service-provider.service';
import { ServiceProviderController } from './controller/service-provider.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { ServiceProviderRepository } from './repositories/service-provider.repository';

@Module({
  controllers: [ServiceProviderController],
  imports: [AuthModule, TypeOrmModule.forFeature([ServiceProviderRepository])],
  providers: [ServiceProviderService],
})
export class ProviderModule {}
