import { Router } from "express";

// Controllers
import {
  loginController,
  logoutController,
  signUpController,
  updateUserController,
} from "./../controllers/user.controller.js";

// Middlewares
import validateData from "../middleware/validateData.js";
import loginSchema from "../schemas/loginSchema.js";
import signUpSchema from "../schemas/signUpSchema.js";
import updateUserSchema from "../schemas/updateUserSchema.js";
import protectRoute from "../middleware/protectRoute.js";

const router = Router();

router.post("/signup", validateData(signUpSchema), signUpController);
router.post("/login", validateData(loginSchema), loginController);
router.post("/logout", logoutController);
router.put(
  "/",
  protectRoute,
  validateData(updateUserSchema),
  updateUserController
);

export default router;
