import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({collection: 'users'})  //add more user info. user enum.
export class User {
  @Prop({auto: true})
  _id: Types.ObjectId;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  country: string;

  @Prop()
  address: string;

  @Prop()
  zipcode: number;

  @Prop()
  city: string;

  @Prop()
  about: string;

  @Prop()
  phone_no: number;




  constructor(
    _id: Types.ObjectId,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    country: string,
    address: string,
    zipcode: number,
    city: string,
    about: string,
    phone_no: number,

  ) {
      this._id = new Types.ObjectId(_id);
      this.firstName = firstName;
      this.lastName = lastName
      this.email = email;
      this.password = password;
      this.country = country;
      this.address = address;
      this.zipcode = zipcode;
      this.city = city;
      this.about = about;
      this.phone_no = phone_no;



  }

}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User)