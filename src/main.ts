import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    allowedHeaders: '*',
    methods: '*',
  });

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Reparo Rapido API')
    .setDescription('TCC API')
    .setVersion('1.0')
    // .addTag('provider')
    .addTag('Token')
    .addTag('Admin')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(8080, () => console.log('Start server port 8080'));
}
bootstrap();
