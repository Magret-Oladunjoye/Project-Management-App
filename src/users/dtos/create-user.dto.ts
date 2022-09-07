import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  country: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsNumber()
  @IsOptional()
  zipcode: number;

  @IsString()
  @IsOptional()
  city: string;

  @IsString()
  @IsOptional()
  about: string;

  @IsString()
  @IsOptional()
  phone_no: number;





  


}
