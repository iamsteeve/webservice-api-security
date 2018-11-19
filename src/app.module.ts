import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HashController } from './hash/hash.controller';
import { HashService } from './hash/hash.service';

@Module({
  imports: [],
  controllers: [AppController, HashController],
  providers: [AppService, HashService],
})
export class AppModule {}
