import { IsEmail, IsString, IsOptional, IsDateString } from 'class-validator';

export class UpdateShiftDto {
  @IsString()
  @IsOptional()
  shift_title: string;

  @IsString()
  @IsOptional()
  shift_description: string;

  @IsDateString()
  @IsOptional()
  shift_start_date: Date;

  @IsDateString()
  @IsOptional()
  shift_end_date: Date;


}
