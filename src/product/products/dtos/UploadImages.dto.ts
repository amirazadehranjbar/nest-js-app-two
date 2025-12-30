import {ApiProperty} from "@nestjs/swagger";


export class UploadImagesDto {

    @ApiProperty({
        type: 'array',
        required: true,
        format:"binary"
    })
    files:Express.Multer.File[]

    @ApiProperty({type:"string" , required:true , default:'6952085887ba629985bab11c'})
    id: string;

}