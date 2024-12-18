import { Router } from "express";
import {
  validateUserRegistration,
  validateLogin,
} from "../Middleware/UserValidator.js";
import { registerUser, loginUser } from "../Controller/auth.js";

const authRouter = Router();

// /api/v1/auth/register
authRouter.post("/register", validateUserRegistration, registerUser);
authRouter.post("/login", validateLogin, loginUser);
export { authRouter };
