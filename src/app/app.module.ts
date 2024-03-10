import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalModule } from 'src/global/global.module';
import { UserModule } from 'src/features/user/user.module';

@Module({
  imports: [GlobalModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
