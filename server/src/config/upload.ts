import multer from 'multer';
import crypto from 'crypto';

import { resolve } from 'path';
const tempFolder = resolve(__dirname, '..', '..', 'tmp')

export default {
  limits: {
    fileSize: 1000*100
  },
  uploadsFolder: tempFolder,
  directory: tempFolder,
  storage: multer.diskStorage({
    destination: tempFolder,
    filename: (req, file, callback) => {
      const fileHash = crypto.randomBytes(10).toString('hex')
      const fileName = `${fileHash}-${file.originalname}`

      // Checkout if have one upload compete

      return callback(null, fileName)
    },
  }),
};
