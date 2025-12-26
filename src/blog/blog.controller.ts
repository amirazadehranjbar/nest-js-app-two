import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {createBlogDto} from "./dtos/createBlogDto";
import {UpdateBlogDto} from "./dtos/updateBlogDto";
import {BlogService} from "./blog.service";
import {BlogQueryDto} from "./dtos/blogQuery.dto";

@Controller('blog')
export class BlogController {

    constructor(private readonly blogService: BlogService) {}

    @ApiTags('Blog')

    //region✅ get all blogs
    @Get('all')
    findAll(@Query() queryParams : BlogQueryDto) {
        return this.blogService.findAll(queryParams);
    }
    //endregion

    //region✅ create new blog
    @Post('create')
    create(@Body() body:createBlogDto){
        return this.blogService.create(body);
    }
    //endregion

    //region✅ find by id
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.blogService.findOne(id);
    }
    //endregion

    //region✅ update blog
    @Put('update/:id')
    update(@Param('id') id: string, @Body() body: UpdateBlogDto) {
        return this.blogService.update(id, body);
    }
    //endregion

    //region✅ delete blog
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.blogService.delete(id);
    }
    //endregion
}
