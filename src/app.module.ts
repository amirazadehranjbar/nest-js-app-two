import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {BlogModule} from './blog/blog.module';
import {MongooseModule} from "@nestjs/mongoose";
import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
    imports: [BlogModule, MongooseModule.forRoot("mongodb://localhost:27017/nestjs-app-two"), FileUploadModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
