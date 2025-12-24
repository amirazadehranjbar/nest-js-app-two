import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();

    app.useGlobalPipes(new ValidationPipe({
        forbidNonWhitelisted: true,
        whitelist: true,
        transform: true,
        transformOptions :{enableImplicitConversion:true}
        }));

    const config = new DocumentBuilder().setTitle('nest application').build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/document", app, document);

    await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
