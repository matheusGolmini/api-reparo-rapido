import { Injectable } from '@nestjs/common';
import DriveApiAdapter from '../../adapters/Upload/drive.adapter';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UploadService {
  constructor(private readonly driveApiAdapter: DriveApiAdapter) {}

  upload(file: Express.Multer.File) {
    const newID = uuid();
    file.originalname = `${newID}.${file.originalname}`;
    return this.driveApiAdapter.upload(file);
  }
}
