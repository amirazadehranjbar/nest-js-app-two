import {Body, Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {BlogCategory} from "./blog-category-schema";
import {createBlogCategoryDto} from "./dtos/createBlogCategoryDto.dto";
import {UpdateBlogCategoryDto} from "./dtos/updateBlogCategory.dto";

@Injectable()
export class BlogCategoryService {

    constructor(@InjectModel(BlogCategory.name) private blogCategoryModel: Model<BlogCategory>) {
    }

    findAll(){
        return this.blogCategoryModel.find();
    }

    findOne(id:string){
        const category = this.blogCategoryModel.findById(id);
        if(!category){
            throw new NotFoundException("Category not found");
        }
        return category;
    }

    delete(id:string){
        const category = this.blogCategoryModel.findByIdAndDelete(id);
        if(!category){
            throw new NotFoundException("Category not found");
        }
        return category;
    }

    async create(newCategory: createBlogCategoryDto) {
        const category = new this.blogCategoryModel(newCategory);
        await category.save();
        return category;
    }

    update(id:string ,@Body() updatedCategory: UpdateBlogCategoryDto) {

        const updated = this.blogCategoryModel.findByIdAndUpdate(id, updatedCategory, {new: true});

        if(!updated) {
            throw new NotFoundException("Blog Category not found with ID : " +id);
        }

        return updated;
    }


}
