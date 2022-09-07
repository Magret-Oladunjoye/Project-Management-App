import {
    Body,
    Controller,
    Post,
    Get,
    Patch,
    Delete,
    Param,
    Query,
    NotFoundException,
    Session,
    UseGuards,
  } from '@nestjs/common';
  import { Serialize } from '../interceptors/serialize.interceptor';
  import { AuthGuard } from '../guards/auth.guard';
import { ProjectDto } from './dtos/project.dto';
import { ProjectsService } from './projects.service';
import { Project } from 'src/schema/project.schema';
import { CreateProjectDto } from 'src/projects/dtos/create-project.dto';

  
  @Controller('project')
  @Serialize(ProjectDto)
  export class ProjectsController {
    constructor(
      private projectsService: ProjectsService,
    ) {}
  
    @Post('/newproject')
    async newproject(@Body() body: CreateProjectDto, @Session() session: any) {
      const project = await this.projectsService.newproject(body.Project_Name, body.Project_Size, body.Project_Start_Date, body.Project_End_Date, body.Working_Employees, body.Manager);
      session.userId = project.id;
      return project;
    }


  }
  