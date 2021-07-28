import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [AdminController],
  imports: [AuthModule],
  providers: [AdminService],
})
export class AdminModule {}
