import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Shift, ShiftDocument } from 'src/schema/shifts.schema';
import { CreateShiftDto } from './dtos/create-shifts.dto';
import { UpdateShiftDto } from './dtos/update-shift.dto';


@Injectable()
export class ShiftsService {
  constructor(@InjectModel(Shift.name) private readonly shiftModel: Model<ShiftDocument>,
  ) {}

  async create(body: CreateShiftDto) {
    const newShift = new Shift(
      new Types.ObjectId(),
      new Types.ObjectId(body.user_id),
      body.shift_title,
      body.shift_description,
      body.shift_start_date,
      body.shift_end_date
    );

    return await new this.shiftModel(newShift).save();
  }

  async newShift(body:CreateShiftDto) {
    const shift = await this.create(body);
    return shift;
  }

  async getShift(user_id: string) { //if else statement for manager and employe get sgift access
    console.log(user_id);   
    const shifts = await this.shiftModel.find({user_id:new Types.ObjectId(user_id)});
    shifts.forEach(sh=>sh._id=sh._id.toString())
    return shifts;
  }

  async getShiftById(_id: string): Promise<Shift> {
    const found = await this.shiftModel.findById(_id);

    if (!found) {
      throw new NotFoundException(`Shift with ID "${_id}" not found`);
    }
    return found;
  }
  
  async deleteShift(_id: string): Promise<void>{
      const result = await this.shiftModel.deleteOne({_id: new Types.ObjectId(_id)});
      if(result.deletedCount === 0) {
        throw new NotFoundException(`Shift with ID "${_id}" not found `);
      }
  }


  async updateShift( _id: string, body: UpdateShiftDto) {
    const shift = await this.shiftModel.updateOne({_id:new Types.ObjectId(_id)},{ $set: { shift_title: body.shift_title, shift_description: body.shift_description, shift_start_date: body.shift_start_date, shift_end_date: body.shift_end_date}});
    console.log(shift);
    return shift;
  }




}