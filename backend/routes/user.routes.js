import { Router } from "express";
import {
  loginController,
  logoutController,
  signUpController,
  updateUserController,
} from "./../controllers/user.controller.js";

import validateData from "../middleware/validateData.js";
import userSchema from "../schemas/userSchema.js";

const router = Router();

router.post("/signup", validateData(userSchema), signUpController);
router.post("/login", validateData(userSchema), loginController);
router.post("/logout", logoutController);
router.put("/", validateData(userSchema), updateUserController);

export default router;
