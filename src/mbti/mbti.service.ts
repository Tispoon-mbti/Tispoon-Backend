import { Injectable } from '@nestjs/common';
import { CountMbti } from './dto/countMbti.dto';

@Injectable()
export class MbtiService {
    async calResult(cntMbti: CountMbti): Promise<string> {
        const { E, I, N, S, F, T, P, J } = cntMbti;
        let result = '';

        if (E > I) {
            result += 'E';
        } else {
            result += 'I';
        }

        if (N > S) {
            result += 'N';
        } else {
            result += 'S';
        }

        if (F > T) {
            result += 'F';
        } else {
            result += 'T';
        }

        if (P > J) {
            result += 'P';
        } else {
            result += 'J';
        }

        return result;
    }
}
