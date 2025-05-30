import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
