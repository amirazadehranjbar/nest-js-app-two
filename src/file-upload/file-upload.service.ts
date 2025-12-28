import { Injectable } from '@nestjs/common';
import { ImageSave } from './utils/file-utils';

@Injectable()
export class FileUploadService {
    async handleFileUpload(file: Express.Multer.File, folderName: string) {
        const res = await ImageSave(file, folderName);
        return {
            message:res,
        };
    }
}
