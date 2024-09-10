import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entity/User";
import { Doctor } from "../entity/Doctor";
import { Survey } from "../entity/Survey";
import { Role } from "../entity/Role";
import { Manager } from "../entity/Manager";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "72037203",
  database: "new_clinvix",
  synchronize: false,
  logging: false,
  entities: [User, Doctor, Manager, Survey, Role],
  migrations: [],
  subscribers: [],
});
