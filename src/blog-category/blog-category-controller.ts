import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {BlogCategoryService} from "./blog-category.service";
import {createBlogCategoryDto} from "./dtos/createBlogCategoryDto.dto";
import {ApiTags} from "@nestjs/swagger";
import {UpdateBlogCategoryDto} from "./dtos/updateBlogCategory.dto";

@Controller('blog-category')
export class BlogCategoryController {
    constructor(private readonly categoryService: BlogCategoryService) {
    }

    @Get('find-all')
    findAll() {
        return this.categoryService.findAll();
    }

    @Post('create')
    create(@Body() newCategory :createBlogCategoryDto)
    {
        return this.categoryService.create(newCategory);
    }

    @Post('findOne/:id')
    findOne(@Param('id') id: string) {
        return this.categoryService.findOne(id)
    }

    @Delete('delete/:id')
    delete(@Param('id') id: string) {
        return this.categoryService.delete(id)
    }

    @Put('update/:id')
    update(@Param('id') id: string,@Body() updateBlogCategoryDto:UpdateBlogCategoryDto)
    {
        return this.categoryService.update(id,updateBlogCategoryDto);
    }
}
