import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class createBlogCategoryDto {

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    icon: string;

}