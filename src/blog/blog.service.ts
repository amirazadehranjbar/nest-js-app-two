import {Injectable, NotFoundException} from '@nestjs/common';
import {createBlogDto} from "./dtos/createBlogDto";
import {UpdateBlogDto} from "./dtos/updateBlogDto";
import {Blog} from "./schemas/blog.schema";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class BlogService {

    constructor(@InjectModel(Blog.name) private readonly blogModel: Model<Blog>) {
    }

    //region✅ get all blogs or find by query
    async findAll() {
        return await this.blogModel.find().exec();
    }

    //endregion

    //region✅ find blog by ID
    async findOne(id: string) {
        const blog = await this.blogModel.findOne({_id: id});
        if (blog) {
            return blog;
        } else {
            throw new NotFoundException();
        }
    }

    //endregion

    //region✅ create new blog
    async create(blog: createBlogDto) {

        const newBlog = new this.blogModel(blog);
        await newBlog.save();
        return newBlog;
    }

    //endregion

    //region✅ delete blog
    delete(id: string) {
        return this.blogModel.findByIdAndDelete({_id: id});
    }

    //endregion


    //region✅ update blog
    update(id: string, updateBlog: UpdateBlogDto) {
        return this.blogModel.findByIdAndUpdate({_id: id, updateBlog});

    }

    //endregion


}
