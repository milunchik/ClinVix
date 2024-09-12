import { Router } from "express";
import { DoctorControllers } from "../controllers/doctor.controller";
import { upload, storage } from "../utils/file-upload";

const DocRouter = Router();
const docControllers = new DoctorControllers();

DocRouter.post(
  "/editProfile",
  upload.single("image"),
  docControllers.editProfile
);

DocRouter.get("/doctors", docControllers.allDoctors);

DocRouter.get("/doctor/:id", docControllers.doctorById);

DocRouter.delete("delete/:id", docControllers.delete);

export default DocRouter;
