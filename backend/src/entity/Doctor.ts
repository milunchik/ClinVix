import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Role } from "./Role";

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255 })
  email!: string;

  @Column({ type: "varchar", length: 255 })
  password!: string;

  @Column({ type: "varchar", length: 255 })
  fullname: string = "";

  @Column({ type: "varchar", length: 10 })
  phone_number: string = "";

  @Column({ type: "varchar", length: 255 })
  speciality: string = "";

  @Column({ type: "text" })
  description: string = "";

  @Column({ type: "varchar", nullable: true })
  image?: string;

  @OneToOne(() => Role, (role) => role.doctor)
  @JoinColumn({ name: "role_id" })
  role?: Role;
}
