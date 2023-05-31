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
import { CreateShiftDto } from './dtos/create-shifts.dto';
import { ShiftDto } from './dtos/shifts.dto';
import { ShiftsService } from './shifts.service';
import { GetShiftDto } from './dtos/get-shifts.dto';
import { UpdateShiftDto } from './dtos/update-shift.dto';

  
  @Controller('shifts')
  @Serialize(ShiftDto)
  export class ShiftsController {
    constructor(
      private shiftsService: ShiftsService,
    ) {}
  
    @Post('/newshift')
    async newshift(@Body() body: CreateShiftDto, @Session() session: any) {
      const shift = await this.shiftsService.newShift(body);
      return shift;
    }
    @Post('/getshifts')
    async getshifts(@Body() body: GetShiftDto, @Session() session: any) {
      const shift = await this.shiftsService.getShift(body.user_id);
      return shift;
    }

   
    @Delete('/:id')
    removeShift(@Param('id') id: string) {
      return this.shiftsService.deleteShift(id);
    }
  
    @Patch('/:id')
    updateShift(@Param('id') id: string, @Body() body: UpdateShiftDto) {
      console.log(body)
      return this.shiftsService.updateShift(id, body);
    }

  }
  