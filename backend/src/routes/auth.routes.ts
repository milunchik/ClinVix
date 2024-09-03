import { Router } from "express";
import { AuthControllers } from "../controllers/auth.controller";

const AuthRouter = Router();
const authControllers = new AuthControllers();

AuthRouter.post("/signup", authControllers.signup);
AuthRouter.post("/signin", authControllers.signin);
AuthRouter.post("/signout", authControllers.signout);
AuthRouter.delete("/delete/:id", authControllers.delete);

export default AuthRouter;
