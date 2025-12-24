import {Injectable, NotFoundException} from '@nestjs/common';
import {createBlogDto} from "./dtos/createBlogDto";
import {UpdateBlogDto} from "./dtos/updateBlogDto";
import {IBlog} from "./entities/blogIntity";

@Injectable()
export class BlogService {

    private blogs : IBlog[] = [
        {
            _id:"1",
            title: "title 1",
            content: "content 1"
        },
        {
            _id:"2",
            title: "title 2",
            content: "content 2"
        }
    ];

    findAll(){
        return this.blogs;
    }

    findOne(id:string){
        const blog = this.blogs.find(b => b._id === id);
        if(blog){
            return blog;
        }else {
            throw new NotFoundException();
        }
    }

    create(blog: createBlogDto) {
        const newBlog = {
            _id: String(this.blogs.length + 1),
            // OR use: _id: Date.now().toString(), // Timestamp-based ID
            ...blog
        };
        this.blogs.push(newBlog);
        return newBlog;
    }

    delete(id:string){
        const blog = this.blogs.find(b => b._id === id);
        if(blog){
            return this.blogs.filter(b => b._id === id);
        }else {
            throw new NotFoundException();
        }
    }


    update(id: string, updateBlog: UpdateBlogDto) {
        const blogIndex = this.blogs.findIndex(b => b._id === id);
        
        if (blogIndex !== -1) {
            this.blogs[blogIndex] = {
                ...this.blogs[blogIndex],
                ...updateBlog
            };
            return this.blogs[blogIndex];
        } else {
            throw new NotFoundException(`Blog with id ${id} not found`);
        }
    }


}
