import { IUploadResponse } from '../interface/upload';

export interface Upload {
  upload(image: any): Promise<IUploadResponse>;
}
