import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Reparo Rapido API example')
    .setDescription('TCC API')
    .setVersion('1.0')
    // .addTag('provider')
    .addTag('token')
    .addTag('admin')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3001, () => console.log('Start server port 3001'));
}
bootstrap();
