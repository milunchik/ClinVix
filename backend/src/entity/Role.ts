import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { User } from "./User";
import { Doctor } from "./Doctor";
import { Manager } from "./Manager";

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255 })
  value!: string;

  @OneToOne(() => User, (user) => user.role)
  user?: User;

  @OneToOne(() => Doctor, (doctor) => doctor.role)
  doctor?: Doctor;

  @OneToOne(() => Manager, (manager) => manager.role)
  manager?: Manager;
}
