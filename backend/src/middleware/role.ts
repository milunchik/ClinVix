import { User } from "../entity/User";
import { Doctor } from "../entity/Doctor";
import { Manager } from "../entity/Manager";
import { Role } from "../entity/Role";
import { AppDataSource } from "../utils/data-source";

export class RoleAssignment {
  async roleAssignment(role: string, email: string, password: string) {
    const roleRepository = AppDataSource.getRepository(Role);
    let newUser;

    if (role === "doctor") {
      const doctorRepository = AppDataSource.getRepository(Doctor);
      newUser = doctorRepository.create({ email, password });
      await doctorRepository.save(newUser);

      const newRole = roleRepository.create({
        value: "doctor",
        doctor: newUser,
      });
      await roleRepository.save(newRole);

      newUser.role = newRole;
      await doctorRepository.save(newUser);

      return newUser;
    } else if (role === "manager") {
      const managerRepository = AppDataSource.getRepository(Manager);
      newUser = managerRepository.create({ email, password });
      await managerRepository.save(newUser);

      const newRole = roleRepository.create({
        value: "manager",
        manager: newUser,
      });
      await roleRepository.save(newRole);

      newUser.role = newRole;
      await managerRepository.save(newUser);

      return newUser;
    } else {
      const userRepository = AppDataSource.getRepository(User);
      newUser = userRepository.create({ email, password });
      await userRepository.save(newUser);

      const newRole = roleRepository.create({
        value: "user",
        user: newUser,
      });
      await roleRepository.save(newRole);

      newUser.role = newRole;
      await userRepository.save(newUser);

      return newUser;
    }
  }
}
