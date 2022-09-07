import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/users/auth.module';
import { UsersModule } from 'src/users/users.module';
import { Shift, ShiftSchema } from 'src/schema/shifts.schema';
import { ShiftsService } from './shifts.service';
import { ShiftsController } from './shifts.controller';

@Module({
  imports:[MongooseModule.forFeature([{ name: Shift.name, schema: ShiftSchema }]), 
          forwardRef(() => UsersModule), 
          forwardRef(() => AuthModule)
  ],
  controllers: [ShiftsController],
  providers: [
    ShiftsService,
  ],
})
export class ShiftsModule {}
