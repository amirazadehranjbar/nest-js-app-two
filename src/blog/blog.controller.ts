import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {createBlogDto} from "./dtos/createBlogDto";
import {UpdateBlogDto} from "./dtos/updateBlogDto";
import {BlogService} from "./blog.service";

@Controller('blog')
export class BlogController {

    constructor(private readonly blogService: BlogService) {}

    @ApiTags('Blog')
    @Get('all')
    findAll(@Query() query) {
        return "find all posts";
    }

    @Post('create')
    create(@Body() body:createBlogDto){
        return this.blogService.create(body);
    }

    @Get('categories')
    findAllCategories() {
        return "find all categories";
    }


    @Get(':id')
    findOne(@Param('id') id: string) {
        return `find one ${id}`;
    }

    @Put('update/:id')
    update(@Param('id') id: string, @Body() body: UpdateBlogDto) {
        return this.blogService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return "Deletefrom blogs";
    }
}
