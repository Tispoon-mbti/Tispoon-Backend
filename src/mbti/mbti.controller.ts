import { Body, Controller, Post } from '@nestjs/common';
import { CountMbti } from './dto/countMbti.dto';
import { MbtiService } from './mbti.service';

@Controller('mbti')
export class MbtiController {
    constructor(
        private mbtiService: MbtiService
    ) {}

    @Post('result')
    async calResult(@Body() cntMbti: CountMbti): Promise<object> {
        const data = await this.mbtiService.calResult(cntMbti);

        return Object.assign({
            mbti: data
        });
    }
}
