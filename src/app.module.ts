import { forwardRef, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './projects/projects.module';
import { ShiftsModule } from './shifts/shifts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Magret:zwb9lIoGR2gKWnAi@project-management.tp3qo5a.mongodb.net/?retryWrites=true&w=majority'),
    UsersModule,
    ProjectsModule,
    ShiftsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}
