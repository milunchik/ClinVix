import { IsDate, IsEmail, IsString } from "class-validator";
import { Timestamp } from "typeorm";

export class SurveyDTO {
  @IsEmail()
  email: string;

  @IsString()
  fullname: string;

  @IsString()
  phone_number: string;

  @IsString()
  age: string;

  @IsDate()
  date: Date;

  @IsString()
  time: Timestamp;

  @IsString()
  symptoms: string;

  @IsString()
  doctor_name: string;

  constructor(
    email: string,
    fullname: string,
    phone_number: string,
    age: string,
    symptoms: string,
    date: Date,
    time: Timestamp,
    doctor_name: string
  ) {
    this.email = email;
    this.fullname = fullname;
    this.phone_number = phone_number;
    this.age = age;
    this.symptoms = symptoms;
    this.date = date;
    this.time = time;
    this.doctor_name = doctor_name;
  }
}
