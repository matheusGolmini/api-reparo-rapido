import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { AwsAdapter } from '../../adapters/aws/aws';

@Injectable()
export class UploadService {
  constructor(private readonly awsAdapter: AwsAdapter) {}

  upload(file: Express.Multer.File) {
    const newID = uuid();
    file.originalname = `${newID}${file.originalname}`;
    return this.awsAdapter.upload(
      file.buffer,
      file.originalname,
      file.mimetype,
    );
  }
}
