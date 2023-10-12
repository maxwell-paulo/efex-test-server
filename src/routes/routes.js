import { Router } from "express";
import { registerUser, login } from "../controllers/usercontrollers.js";
import { validateRegistration } from "../middlewares/validateRegistration.js";
import { validateLoginData } from "../middlewares/authMiddleware.js";

export const router = Router();

router.post("/user", validateRegistration, registerUser);

router.post("/login", validateLoginData, login);
