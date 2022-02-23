import { IsDate, IsEmpty, IsNumber } from 'class-validator';

export class CreateTimeOptionDto {
  @IsEmpty()
  @IsNumber({}, { message: 'tem que ser numero' })
  day: number;

  @IsDate()
  time: Date;
}
