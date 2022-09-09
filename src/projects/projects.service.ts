import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Project, ProjectDocument } from 'src/schema/project.schema';
import { User } from 'src/schema/user.schema';
import { projectSize } from './projects.size.enum';


@Injectable()
export class ProjectsService {
  constructor(@InjectModel(Project.name) private readonly projectModel: Model<ProjectDocument>,
  ) {}

  async create(Project_Name: string, Project_Size: string, Project_Start_Date: Date, Project_End_Date: Date, Working_Employees: string, Manager: string) {
    const newProject = new Project(
      new Types.ObjectId(),
      Project_Name,
      Project_Size,
      Project_Start_Date,
      Project_End_Date,
      Working_Employees,
      Manager
    );

    return await new this.projectModel(newProject).save();
  }

  async newproject(Project_Name: string, Project_Size: string, Project_Start_Date: Date, Project_End_Date: Date, Working_Employees: string, Manager: string) {
    const project = await this.create(Project_Name, Project_Size, Project_Start_Date, Project_End_Date, Working_Employees, Manager);

    return project;
  }


  findOne(id: number) {
    if (!id) {
      return null;
    }
    //return this.repo.findOne(id);
  }

}