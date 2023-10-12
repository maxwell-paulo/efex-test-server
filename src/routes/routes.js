import { Router } from "express";
import { registerUser } from "../controllers/usercontrollers.js";
import { validateRegistration } from "../middlewares/validateRegistration.js";

export const router = Router();

router.post("/user", validateRegistration, registerUser);
