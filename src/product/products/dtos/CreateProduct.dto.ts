import {ApiProperty} from "@nestjs/swagger";
import {IsArray, IsMongoId, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateProductDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsMongoId()
    category: string;

    @ApiProperty()
    @IsArray()
    images: string[];
}