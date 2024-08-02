import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

interface ServerConfig {
  port: number;
}

const serverConfig: ServerConfig = config.get('server');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // cors 설정
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    exposedHeaders: ['Authorization'], // * 사용할 헤더 추가.
  });

  await app.listen(serverConfig.port);
  console.log('server listen port :', serverConfig.port);
}
bootstrap();
