import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../entity/Role";

@Entity()
export class Manager {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @OneToOne(() => Role, (role) => role.manager)
  @JoinColumn({ name: "role_id" })
  role?: Role;
}
