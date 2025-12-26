import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({timestamps: true})
export class BlogCategory {

    @Prop()
    name: string;

    @Prop()
    icon: string;
}

export const blogCategorySchema = SchemaFactory.createForClass(BlogCategory);