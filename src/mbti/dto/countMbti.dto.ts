import { IsNumber } from "class-validator";

export class CountMbti {

    @IsNumber()
    E: number;

    @IsNumber()
    I: number;

    @IsNumber()
    N: number;

    @IsNumber()
    S: number;

    @IsNumber()
    F: number;

    @IsNumber()
    T: number;

    @IsNumber()
    P: number;

    @IsNumber()
    J: number;
}