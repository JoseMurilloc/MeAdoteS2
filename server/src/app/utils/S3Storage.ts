import aws, {S3} from 'aws-sdk'
import { resolve } from 'path';
import {multerUserConfig} from '../../config/upload'
import mime from 'mime'
import AppError from '../errors/AppError';
import fs from 'fs'

export default class S3Storage {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: 'us-east-1'
    })
  }

  async saveFile(filename: string): Promise<void> {
    const originalPath = resolve(multerUserConfig.directory, filename)
    const ContentType = mime.getType(originalPath)

    if (!ContentType) {
      throw new AppError('File not found', 502)
    }

    const fileContent = await fs.promises.readFile(originalPath)

    this.client.putObject({
      Bucket: 'upload-profile-avatar-user',
      Key: filename,
      ACL: 'public-read',
      Body: fileContent,
      ContentType
    })
      .promise()

    await fs.promises.unlink(originalPath)

  }
}
