import {ApiProperty, PartialType} from "@nestjs/swagger";
import {createBlogCategoryDto} from "./createBlogCategoryDto.dto";
import {IsOptional} from "class-validator";

export class UpdateBlogCategoryDto extends PartialType(createBlogCategoryDto) {
}