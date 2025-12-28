import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {BlogCategory, blogCategorySchema} from "./blog-category-schema";
import { BlogCategoryService } from './blog-category.service';
import { BlogCategoryController } from './blog-category-controller';

@Module({
    imports: [MongooseModule.forFeature([{name:BlogCategory.name , schema:blogCategorySchema}])],
    controllers:[BlogCategoryController],
    providers: [BlogCategoryService],
})
export class BlogCategoryModule {}
