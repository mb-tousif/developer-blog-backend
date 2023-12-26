import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(`${app.get(ConfigService).get('APP_PORT')}`);
  console.log(
    `Application is running on: ${(await app.getUrl()).replace(
      '[::1]',
      'localhost',
    )}`,
  );
}

bootstrap();
