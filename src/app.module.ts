import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {BlogModule} from './blog/blog.module';
import {MongooseModule} from "@nestjs/mongoose";
import { FileUploadModule } from './file-upload/file-upload.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import { ProductModule } from './product/products/product.module';
import { ProductCategoryModule } from './product/product-category/product-category.module';

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

        ProductModule,

        ProductCategoryModule,
    ],

    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
