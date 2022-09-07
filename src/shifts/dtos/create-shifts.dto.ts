import {IsString, IsDate, IsNumber, IsDateString } from 'class-validator';
import { User } from 'src/schema/user.schema';

export class CreateShiftDto {
  
  @IsString()
  user_id: string;

  @IsString()
  shift_title: string;

  @IsString()
  shift_description: string;

  @IsDateString()
  shift_start_date: Date;

  @IsDateString()
  shift_end_date: Date;


}