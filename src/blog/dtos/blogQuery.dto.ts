import {ApiProperty} from "@nestjs/swagger";
import {IsEnum, IsOptional, IsString} from "class-validator";

export enum ESort {
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    title = "title",
}

export class BlogQueryDto {

    @IsOptional()
    page?: number;


    @IsOptional()
    pageSize?: number;


    @IsOptional()
    @IsString()
    title?: string;


    @IsEnum(ESort)
    @IsOptional()
    sort?: ESort;

}