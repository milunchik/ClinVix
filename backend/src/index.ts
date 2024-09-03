import "reflect-metadata";
import { AppDataSource } from "./utils/data-sourse";
import express from "express";
import router from "./routes/routes";
import { Role } from "./entity/Role";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(router);

AppDataSource.initialize()
  // .then(async () => {
  //   const roleRepository = AppDataSource.getRepository(Role);

  //   const existingRoles = await roleRepository.find();
  //   if (existingRoles.length === 0) {
  //     const userRole = roleRepository.create({ value: "user" });
  //     const managerRole = roleRepository.create({ value: "manager" });
  //     const doctorRole = roleRepository.create({ value: "doctor" });

  //     await roleRepository.save(userRole);
  //     await roleRepository.save(managerRole);
  //     await roleRepository.save(doctorRole);

  //     console.log("Roles have been initialized.");
  //   } else {
  //     console.log("Roles already exist.");
  //   }
  // })
  // .catch((error) => console.log("Error initializing roles", error))
  .finally(() => {
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  });
