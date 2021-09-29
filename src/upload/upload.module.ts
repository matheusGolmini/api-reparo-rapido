import { Module } from '@nestjs/common';
import { UploadService } from './service/upload.service';
import { UploadController } from './controller/upload.controller';
import DriveApiAdapter from '../adapters/Upload/drive.adapter';

@Module({
  controllers: [UploadController],
  providers: [UploadService, DriveApiAdapter],
})
export class UploadModule {}
