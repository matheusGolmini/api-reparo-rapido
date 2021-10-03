import { IUploadResponse } from '../interfaces/upload';

export interface Upload {
  upload(
    file: Buffer,
    name: string,
    contentType: string,
  ): Promise<IUploadResponse>;
}
