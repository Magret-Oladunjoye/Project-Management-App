import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { projectSize } from "src/projects/projects.size.enum";
import { User } from "./user.schema";

@Schema({collection: 'projects'})
export class Project {
  @Prop({auto: true})
  Project_id: Types.ObjectId;

  @Prop()
  Project_Name: string;

  @Prop()
  Project_Size: string;

  @Prop()
  Project_Start_Date: Date;

  @Prop()   
  Project_End_Date: Date;

  @Prop()
  Working_Employees: string; //number of emps working on a project

  @Prop()
  Manager: string; 

  constructor(
    Project_id: Types.ObjectId,
    Project_Name: string,
    Project_Size: string,
    Project_Start_Date: Date,
    Project_End_Date: Date,
    Working_Employees: string,
    Manager: string,

  ) {
      this.Project_id = new Types.ObjectId(this.Project_id);
      this.Project_Name = Project_Name;
      this.Project_Size = Project_Size;
      this.Project_Start_Date = Project_Start_Date;
      this.Project_End_Date = Project_End_Date;
      this.Working_Employees = Working_Employees;
      this.Manager = Manager


 



  }

}

export type ProjectDocument = Project & Document;
export const ProjectSchema = SchemaFactory.createForClass(Project)