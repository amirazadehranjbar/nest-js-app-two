import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {ProductCategory} from "../product-category/product-category.schema";
import * as mongoose from 'mongoose';


@Schema({timestamps:true})
export class Product {

    @Prop({required: true, unique: true})
    name: string;

    @Prop()
    price: number;

    @Prop([String])
    images: string[];

    @Prop({required: true, ref: ProductCategory.name, type: mongoose.Schema.Types.ObjectId})
    category: ProductCategory;


}

export const ProductSchema = SchemaFactory.createForClass(Product);