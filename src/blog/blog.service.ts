import {Injectable, NotFoundException} from '@nestjs/common';
import {createBlogDto} from "./dtos/createBlogDto";
import {UpdateBlogDto} from "./dtos/updateBlogDto";
import {Blog} from "./schemas/blog.schema";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {BlogQueryDto} from "./dtos/blogQuery.dto";

@Injectable()
export class BlogService {

    constructor(@InjectModel(Blog.name) private readonly blogModel: Model<Blog>) {
    }

    //region✅ get all blogs or find by query
    async findAll(queryParams: BlogQueryDto) {
        let {page = 1, pageSize, title, sort} = queryParams;

        const query: any = {};
        if (title) {
            query.title = {$regex: title, $options: "i"};
        }

        let sortObject: any = {};

        if (sort) {
            switch (sort) {
                case 'createdAt':
                    sortObject = {"createdAt": -1};
                    break;
                case 'updatedAt':
                    sortObject = {"updatedAt": -1};
                    break;

            }
        }


        const counts = await this.blogModel.countDocuments(query);
        const blogs = await this.blogModel
            .find(query)
            .populate('category')
            .skip(page - 1)
            .sort(sortObject)
            .select({__v:0})
            .limit(pageSize ?? counts)
            .exec()


        return {counts, blogs};
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
    async update(id: string, updateBlog: UpdateBlogDto) {
        const updated = await this.blogModel.findByIdAndUpdate(
            id,
            updateBlog,
            {new: true}
        );

        if (!updated) {
            throw new NotFoundException(`Blog with id ${id} not found`);
        }

        return updated;
    }

    //endregion


}
