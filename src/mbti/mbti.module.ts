import { Module } from '@nestjs/common';
import { MbtiService } from './mbti.service';
import { MbtiController } from './mbti.controller';

@Module({
  providers: [MbtiService],
  controllers: [MbtiController]
})
export class MbtiModule {}
