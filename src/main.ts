import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('세탁특공대 과제 API Docs')
    .setDescription('세탁특공대 과제 Study API description')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  const port = 3000;
  await app.listen(port);
  logger.log(`Application running on port ${port}`);
}
bootstrap();
