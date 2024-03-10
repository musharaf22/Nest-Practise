import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { GlobalService } from './global/global service';

async function bootstrap() {
  const logger = new GlobalService();
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  await app.listen(3000);
  logger.logs('Server is running on port 3000');
}
bootstrap();
