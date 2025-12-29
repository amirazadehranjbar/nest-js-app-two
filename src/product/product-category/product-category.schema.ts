import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema()
export class ProductCategory {

    @Prop()
    name: string;

    @Prop()
    icon: string;

}

export const ProductCategorySchema = SchemaFactory.createForClass(ProductCategory);