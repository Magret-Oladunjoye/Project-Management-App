import { Expose } from 'class-transformer';
import { projectSize } from '../projects.size.enum';


export class ProjectDto {
  @Expose()
  Project_Name: string;

  @Expose()
  Project_Size: projectSize;
  
  @Expose()
  Project_Start_Date: Date;
  
  @Expose()
  Project_End_Date: Date;
  
  @Expose()
  Working_Employees: number;
  
  @Expose()
  Manager: string;
  
}
