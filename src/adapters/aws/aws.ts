import { BadRequestException } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { IUploadResponse } from './interfaces/upload';
import { Upload } from './protocols';

export class AwsAdapter implements Upload {
  private s3: S3;
  private bucketName: string;
  private region: string;
  constructor() {
    this.bucketName = process.env.BUCKET_NAME || '';
    this.region = process.env.AWS_DEFAULT_REGION || '';
    this.s3 = new S3({
      region: this.region,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    });
  }

  public async upload(
    file: Buffer,
    name: string,
    contentType: string,
  ): Promise<IUploadResponse> {
    try {
      const bucketName = this.bucketName;
      await this.s3
        .putObject({
          Bucket: bucketName,
          Key: name,
          ACL: 'public-read',
          Body: file,
          ContentType: contentType,
        })
        .promise();

      return {
        webViewLink: `https://${bucketName}.s3.amazonaws.com/${name}`,
        webContentLink: `https://${bucketName}.s3.amazonaws.com/${name}`,
      };
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
