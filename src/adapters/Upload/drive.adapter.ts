import drive from './config/index';
import { DeleteFile, Upload } from './protocols';
import * as streamifier from 'streamifier';
import { IUploadResponse } from './interface/upload';

export default class DriveApiAdapter implements Upload, DeleteFile {
  async upload(file: Express.Multer.File): Promise<IUploadResponse> {
    try {
      const response = await drive.files.create({
        requestBody: {
          name: file.originalname,
          mimeType: file.mimetype,
        },
        media: {
          mimeType: file.mimetype,
          body: streamifier.createReadStream(file.buffer),
        },
      });
      return await this.generatePublicUrl(response.data.id);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string) {
    try {
      await drive.files.delete({
        fileId: id,
      });
    } catch (error) {
      console.log(error);
    }
  }

  private async generatePublicUrl(id: string): Promise<IUploadResponse> {
    try {
      await drive.permissions.create({
        fileId: id,
        requestBody: {
          role: 'reader',
          type: 'anyone',
        },
      });

      const result = await drive.files.get({
        fileId: id,
        fields: 'webViewLink, webContentLink',
      });
      return result.data as IUploadResponse;
    } catch (error) {
      console.log(error);
    }
  }
}
