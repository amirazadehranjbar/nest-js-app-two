import {BlogCategory} from "../../blog-category/blog-category-schema";

export interface IBlog {
    _id: string;
    title: string;
    content: string;
    category: string;
}