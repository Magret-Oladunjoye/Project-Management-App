import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { projectSize } from '../projects/projects.size.enum';
import { ProjectsService } from 'src/projects/projects.service';


const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
  

  async signup( firstName: string, lastName: string, email: string, password: string, country: string, address: string, zipcode: number, city: string, about: string, phone_no: number) { //signup method is called from controller
    // See if email is in use
    const users = await this.usersService.find(email);
    if (users.length) {
      throw new BadRequestException('email in use');
    }
    // Hash the users password
    // Generate a salt
    const salt = randomBytes(8).toString('hex'); //16 char long salt

    //join the salt and the password together and hash it
    const hash = (await scrypt(password, salt, 32)) as Buffer; //32 char long

    // Join the hashed result and the salt together
    const result = salt + '.' + hash.toString('hex'); //result is the value we add to our database

    // Create a new user and save it
    const user = await this.usersService.create( firstName,lastName, email, result, country, address, zipcode, city, about, phone_no);

    // return the user
    return user;
  }

  async signin(email: string, password: string) { //signin is an auth step to make sure user provided correct email and password
    const [user] = await this.usersService.find(email); 
    if (!user) {
      throw new NotFoundException('user not found');
    }
    const [salt, storedHash] = user.password.split('.');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('bad password');
    }
    return user;
  }
}
