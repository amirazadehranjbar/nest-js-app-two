import {IsObjectIdPipe, Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';
import {TypeScriptBinaryLoader} from "@nestjs/cli/lib/compiler/typescript-loader";
import {BlogCategory} from "../../blog-category/blog-category-schema";
import * as mongoose from "mongoose";


@Schema({timestamps: true})
export class Blog {
    @Prop()
    title: string;

    @Prop()
    content: string;

    @Prop({
        type :mongoose.Schema.Types.ObjectId,
        ref: BlogCategory.name,
        isRequired: true,
    })
    category: BlogCategory;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
