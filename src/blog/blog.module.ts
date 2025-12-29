import { Module } from '@nestjs/common';
import {BlogController} from "./blog.controller";
import {BlogService} from "./blog.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Blog, BlogSchema} from "./schemas/blog.schema";
import {BlogCategoryModule} from "../blog-category/blog-category.module";


@Module({
    imports: [MongooseModule.forFeature([{name:Blog.name , schema:BlogSchema}]) , BlogCategoryModule],
    controllers:[BlogController , ],
    providers:[BlogService],
})
export class BlogModule {}
