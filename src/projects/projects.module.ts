import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from 'src/schema/project.schema';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { AuthModule } from 'src/users/auth.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]), 
          forwardRef(() => UsersModule), 
          forwardRef(() => AuthModule)
  ],
  controllers: [ProjectsController],
  providers: [
    ProjectsService,
  ],
})
export class ProjectsModule {}
