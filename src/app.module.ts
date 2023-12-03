import { Module } from '@nestjs/common';
import { MbtiModule } from './mbti/mbti.module';

@Module({
  imports: [MbtiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
