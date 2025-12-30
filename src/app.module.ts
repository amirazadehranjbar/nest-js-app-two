import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {BlogModule} from './blog/blog.module';
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule, ConfigService} from "@nestjs/config";
import { ProductModule } from './product/products/product.module';
import { ProductCategoryModule } from './product/product-category/product-category.module';
import {APP_FILTER} from "@nestjs/core";
import {LogFilter} from "./filters/log.filter";
import {LogFilterSchema} from "./filters/schemas/Log.schema";


@Module({
    imports: [
        BlogModule,
        // Load .env file
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),

        // MongoDB with async configuration
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get('MONGODB_URI'),
            }),
            inject: [ConfigService],
        }),

        // add filter log schema
        MongooseModule.forFeature([{name : LogFilter.name , schema : LogFilterSchema}]),

        ProductModule,

        ProductCategoryModule,
    ],

    controllers: [AppController],
    providers: [AppService , {provide:APP_FILTER , useClass: LogFilter}],
})
export class AppModule {
}
