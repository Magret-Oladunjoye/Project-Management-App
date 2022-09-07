import {IsString, IsDate, IsNumber } from 'class-validator';
import { User } from 'src/schema/user.schema';
import { projectSize } from '../projects.size.enum';

export class CreateProjectDto {
  @IsString()
  Project_Name: string;

  @IsString()
  Project_Size: projectSize;
  
  @IsDate()
  Project_Start_Date: Date;
  
  @IsDate()
  Project_End_Date: Date;
  
  @IsNumber()
  Working_Employees: User[];
  
  @IsString()
  Manager: User;
  
}
