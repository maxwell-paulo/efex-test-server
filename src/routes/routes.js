import { Router } from "express";
import { registerUser, login } from "../controllers/usercontrollers.js";
import { validateRegistration } from "../middlewares/validateRegistration.js";
import {
  validateLoginData,
  validateToken,
} from "../middlewares/authMiddleware.js";

import {
  createTask,
  listTasks,
  isTaskDone,
} from "../controllers/taskcontrollers.js";

export const router = Router();

router.post("/user", validateRegistration, registerUser);

router.post("/login", validateLoginData, login);

router.use(validateToken);

router.post("/task", createTask);
router.get("/task", listTasks);
router.patch("/task", isTaskDone);
