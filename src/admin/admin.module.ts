import { Module } from '@nestjs/common';
import { AdminService } from './service/admin.service';
import { AdminController } from './controller/admin.controller';
import { AuthModule } from '../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminRepository } from './repositories/admin.repository';

@Module({
  controllers: [AdminController],
  imports: [AuthModule, TypeOrmModule.forFeature([AdminRepository])],
  providers: [AdminService],
})
export class AdminModule {}
