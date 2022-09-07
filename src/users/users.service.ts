import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User, UserDocument } from 'src/schema/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(firstName: string, lastName: string, email: string, password: string, country: string, address: string, zipcode: number, city: string, about: string, phone_no: number,) {
    const newUser = new User(
      new Types.ObjectId(),
      firstName,
      lastName,
      email,
      password,
      country,
      address,
      zipcode,
      city,
      about,
      phone_no
    );
    return await new this.userModel(newUser).save();
  }

  findOne(id: number) {
    if (!id) {
      return null;
    }
    //return this.repo.findOne(id);
  }

  find(email: string) { //find method gives us a list of users with a given email
    return this.userModel.find({ email });
  }

  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, attrs);
    //return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    //return this.repo.remove(user);
  }
}
