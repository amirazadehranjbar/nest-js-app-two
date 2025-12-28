import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFileUploadDto {
    @ApiProperty({ type: 'string', format: 'binary' })
    file: any;

    @ApiProperty({ required: false, example: 'avatars' })
    @IsString()
    @IsOptional()
    folderName?: string;
}
