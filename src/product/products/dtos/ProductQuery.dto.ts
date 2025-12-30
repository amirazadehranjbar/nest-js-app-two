import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

export class ProductQueryDto {
    @ApiProperty({ required: false , default:1})
    @IsOptional()
    @IsInt()
    @Type(() => Number)  // ← Transform string to number
    page?: number;

    @ApiProperty({ required: false , default:10})
    @IsOptional()
    @IsInt()
    @Type(() => Number)  // ← Transform string to number
    pageSize?: number;

    @ApiProperty({ required: false  , default:'-createdAt'})
    @IsOptional()
    @IsString()
    sort?: string;
}