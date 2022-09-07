import { forwardRef, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core'
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { CurrentUserInterceptor } from './interceptors/current-user.interceptor';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schema/user.schema';
import { ProjectsModule } from 'src/projects/projects.module';
import { AuthModule } from './auth.module';


@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), 
            forwardRef(() => ProjectsModule),
            AuthModule],
  controllers: [UsersController],
  exports:[UsersService],
  providers: [
    UsersService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CurrentUserInterceptor,
    },
  ],
})
export class UsersModule {}
