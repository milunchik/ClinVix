import { User } from "../entity/User";
import { Doctor } from "../entity/Doctor";
import { Manager } from "../entity/Manager";
import { Role } from "../entity/Role";
import { AppDataSource } from "../utils/data-source";

export class RoleAssignment {
  async roleAssignment(role: string, email: string, password: string) {
    const roleRepository = AppDataSource.getRepository(Role);
    let newUser;

    const roleEntity = await roleRepository.findOne({ where: { value: role } });
    if (!roleEntity) {
      throw new Error("Role not found");
    }

    if (role === "doctor") {
      const doctorRepository = AppDataSource.getRepository(Doctor);
      newUser = doctorRepository.create({
        email,
        password,
        role: roleEntity,
      });

      await doctorRepository.save(newUser);
    } else if (role === "manager") {
      const managerRepository = AppDataSource.getRepository(Manager);
      newUser = managerRepository.create({
        email,
        password,
        role: roleEntity,
      });
      await managerRepository.save(newUser);
    } else {
      const userRepository = AppDataSource.getRepository(User);
      newUser = userRepository.create({
        email,
        password,
        role: roleEntity,
      });

      await userRepository.save(newUser);
    }

    return newUser;
  }
}
