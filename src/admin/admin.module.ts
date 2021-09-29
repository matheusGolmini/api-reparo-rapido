import { Module } from '@nestjs/common';
import { AdminService } from './service/admin.service';
import { AdminController } from './controller/admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminRepository } from './repositories/admin.repository';
import { PersonModule } from '../person/person.module';
import { AdpterBcrypt } from '../adapters/Encrypeter/bcrypt.adpter';

@Module({
  controllers: [AdminController],
  imports: [PersonModule, TypeOrmModule.forFeature([AdminRepository])],
  providers: [AdminService, AdpterBcrypt],
})
export class AdminModule {}
