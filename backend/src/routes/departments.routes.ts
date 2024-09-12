import { Router } from "express";
import { DepartmentsController } from "../controllers/departments.controller";

const DepRouter = Router();
const depControllers = new DepartmentsController();

DepRouter.get("/departments", depControllers.getDepartments);

export default DepRouter;
