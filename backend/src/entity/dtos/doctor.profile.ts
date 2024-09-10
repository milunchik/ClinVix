import { IsEmail, IsString } from "class-validator";

export class DoctorDTO {
  @IsEmail()
  email: string;

  @IsString()
  fullname: string;

  @IsString()
  phone_number: string;

  @IsString()
  speciality: string;

  @IsString()
  description: string;

  @IsString()
  image: string;

  constructor(
    email: string,
    fullname: string,
    phone_number: string,
    speciality: string,
    description: string,
    image: string
  ) {
    this.email = email;
    this.fullname = fullname;
    this.phone_number = phone_number;
    this.speciality = speciality;
    this.description = description;
    this.image = image;
  }
}
