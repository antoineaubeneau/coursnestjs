import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiController } from './server/server.controller';

@Module({
  imports: [],
  controllers: [ApiController, AppController],
  providers: [AppService],
})
export class AppModule { }
