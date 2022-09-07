import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ProjectsService } from 'src/projects/projects.service';
import { ProjectsModule } from 'src/projects/projects.module';


@Module({
    imports: [
      forwardRef(() => UsersModule), 
      forwardRef(() => ProjectsModule)
    ],
    exports: [AuthService], 
    providers: [
      AuthService
    ],
    
  })
  export class AuthModule {}
  