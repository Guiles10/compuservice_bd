import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())
  
  app.enableCors({
    origin: ['http://localhost:3000', 'https://compuservice-front.vercel.app']
  });

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true }),
    new ValidationPipe({
      transform: true,
      transformOptions: { groups: ['Trasforme']}
    })
  )
  await app.listen(3001);
}
bootstrap();
