import { User } from "../entity/User";
import { AppDataSource } from "../utils/data-source";
import { Request, Response } from "express";
import { randomBytes, scrypt as _scrypt } from "crypto";
import { promisify } from "util";
import { RoleAssignment } from "../middleware/role";
import { CreateUserDto } from "../entity/dtos/create-user";
import { Survey } from "../entity/Survey";

const scrypt = promisify(_scrypt);
async function hashPassword(password: string) {
  const salt = randomBytes(8).toString("hex");
  const hash = (await scrypt(password, salt, 32)) as Buffer;

  return `${salt}.${hash.toString("hex")}`;
}

const userRepository = AppDataSource.getRepository(User);
const roleAssignment = new RoleAssignment();
const surveyRepository = AppDataSource.getRepository(Survey);

export class AuthControllers {
  signup = async (req: Request, res: Response) => {
    try {
      const { email, password }: CreateUserDto = req.body;
      const role = "user";

      const existingUser = await userRepository.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const hashedPassword = await hashPassword(password);

      const newUser = await roleAssignment.roleAssignment(
        role,
        email,
        hashedPassword
      );

      res.status(201).json(newUser);
    } catch (err) {
      console.log(err);
    }
  };

  signin = async (req: Request, res: Response) => {
    try {
      const { email, password }: CreateUserDto = req.body;
      const user = await userRepository.findOne({ where: { email } });

      if (!user) {
        throw new Error("User not found!");
      }

      const [salt, storedHash] = user.password.split(".");

      const hashedPassword = (await scrypt(password, salt, 32)) as Buffer;

      if (storedHash !== hashedPassword.toString("hex")) {
        throw new Error("Invalid password ");
      }
      if (req.session) {
        req.session.userId = user.id;
      }

      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

  signout = async (req: Request, res: Response) => {
    try {
      if (req.session) {
        req.session.destroy((err: Error) => {
          if (err) {
            return res.status(500).json({ message: "Failed to sign out" });
          }

          res.status(200).json({ message: "Signed out" });
        });
      } else {
        res.status(400).json({ message: "No session to destroy" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);

      const user = await userRepository.findOne({
        where: { id },
        relations: ["surveys"],
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      await surveyRepository.delete({ user: { id: user.id } });
      await userRepository.delete(id);

      return res
        .status(200)
        .json({ message: "User and associated surveys deleted" });
    } catch (err) {
      console.log(err);
    }
  };
}
