import { Module } from '@nestjs/common';
import { UploadService } from './service/upload.service';
import { UploadController } from './controller/upload.controller';
import { AwsAdapter } from '../adapters/aws/aws';

@Module({
  controllers: [UploadController],
  providers: [UploadService, AwsAdapter],
})
export class UploadModule {}
