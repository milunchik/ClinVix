import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Survey } from "./Survey";
import { Role } from "./Role";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => Survey, (survey) => survey.user)
  surveys!: Survey[];

  @OneToOne(() => Role, (role) => role.user)
  @JoinColumn({ name: "role_id" })
  role!: Role;
}
