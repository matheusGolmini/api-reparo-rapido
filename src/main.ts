import { ValidationPipe } from '@nestjs/common';
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

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Reparo Rapido API')
    .setDescription('TCC API')
    .setVersion('1.0')
    .addTag('Provider')
    .addTag('PersonBlocked')
    .addTag('Token')
    .addTag('Admin')
    .addTag('Auth')
    .addTag('Client')
    .addTag('Skill')
    .addTag('Ticket')
    .addTag('Contract')
    .addTag('ServiceProviderSkill')
    .addTag('Rating')
    .addTag('PersonAddress')
    .addTag('Upload')
    .addTag('Rating')
    .addServer('http://localhost:3001')
    .addServer('https://api-reparo-rapido.herokuapp.com/')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 3001, () =>
    console.log(`Start server port ${process.env.PORT || 3001}`),
  );
}
bootstrap();
