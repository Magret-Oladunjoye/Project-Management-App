import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { projectSize } from "src/projects/projects.size.enum";
import { User } from "./user.schema";

@Schema({collection: 'projects'})
export class Project {
  @Prop({auto: true})
  project_id: Types.ObjectId;

  @Prop()
  project_name: string;

  @Prop()
  project_size: projectSize;

  @Prop()
  project_start_date: Date;

  @Prop()   
  project_end_date: Date;

  @Prop()
  working_employees: User[]; //number of emps working on a project

  @Prop()
  manager: User; 

  constructor(
    _project_id: Types.ObjectId,
    project_name: string,
    project_size: projectSize,
    project_start_date: Date,
    project_end_date: Date,
    working_employees: User[],
    Manager: User,

  ) {
      this.project_id = new Types.ObjectId(this.project_id);
      this.project_name = project_name;
      this.project_size = project_size;
      this.project_start_date = project_start_date;
      this.project_end_date = project_end_date;
      this.working_employees = working_employees;
      this.manager = Manager


 



  }

}

export type ProjectDocument = Project & Document;
export const ProjectSchema = SchemaFactory.createForClass(Project)