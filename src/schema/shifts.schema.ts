import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";


@Schema({collection: 'shifts'})
export class Shift {
  @Prop({auto: true})
  _id: Types.ObjectId;

  @Prop()
  user_id: Types.ObjectId;

  @Prop()
  shift_title: string;

  @Prop()
  shift_description: string;

  @Prop()
  shift_start_date: Date;

  @Prop()
  shift_end_date: Date;




  constructor(
    _id: Types.ObjectId,
    user_id: Types.ObjectId,
    shift_title: string,
    shift_description: string,
    shift_start_date: Date,
    shift_end_date: Date,

  ) {
    this._id = new Types.ObjectId(_id);
    this.user_id = new Types.ObjectId(user_id);
    this.shift_title = shift_title;
    this.shift_description = shift_description;
    this.shift_start_date = shift_start_date;
    this.shift_end_date = shift_end_date
  }

}


export type ShiftDocument = Shift & Document;
export const ShiftSchema = SchemaFactory.createForClass(Shift)