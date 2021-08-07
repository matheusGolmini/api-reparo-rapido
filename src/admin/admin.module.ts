import { Module } from '@nestjs/common';
import { AdminService } from './service/admin.service';
import { AdminController } from './controller/admin.controller';
import { AuthModule } from '../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminRepository } from './repositories/admin.repository';
import { PersonModule } from '../person/person.module';
import { AdpterBcrypt } from '../utils/Encrypeter/bcrypt.adpter';

@Module({
  controllers: [AdminController],
  imports: [
    AuthModule,
    PersonModule,
    TypeOrmModule.forFeature([AdminRepository]),
  ],
  providers: [AdminService, AdpterBcrypt],
})
export class AdminModule {}
