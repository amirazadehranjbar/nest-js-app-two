import {
    Controller,
    Post,
    UseInterceptors,
    UploadedFile,
    Body,
    BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { FileUploadService } from './file-upload.service';
import { ApiConsumes, ApiBody } from '@nestjs/swagger';
import { CreateFileUploadDto } from './dto/create-file-upload.dto';

@Controller('upload')


export class UploadController {
    constructor(private readonly fileUploadService: FileUploadService) {}

    @Post('image')
    @ApiConsumes('multipart/form-data')
    @ApiBody({ type: CreateFileUploadDto })
    @UseInterceptors(FileInterceptor('file', { storage: memoryStorage() }))
    async uploadImage(
        @UploadedFile() file: Express.Multer.File,
        @Body('folderName') folderName?: string,
    ) {
        if (!file) {
            throw new BadRequestException('No file uploaded');
        }

        const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
        if (!allowedMimeTypes.includes(file.mimetype)) {
            throw new BadRequestException(
                'Invalid file type. Allowed: PNG, JPEG, JPG'
            );
        }

        const maxSize = 50 * 1024 * 1024; // 50MB
        if (file.size > maxSize) {
            throw new BadRequestException('File too large (max 50MB)');
        }

        return this.fileUploadService.handleFileUpload(file, folderName || 'general');
    }
}
