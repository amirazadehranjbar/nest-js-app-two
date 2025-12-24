import {IsNotEmpty, IsOptional, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class createBlogDto {

    @ApiProperty({ example: 'My Blog Title' })
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({ example: 'My Blog Content' })
    @IsNotEmpty()
    @IsString()
    content: string;
}