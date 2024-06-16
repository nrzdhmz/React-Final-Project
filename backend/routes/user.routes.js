import { Router } from "express";
import {
  loginController,
  logoutController,
  signUpController,
  updateUserController,
} from "./../controllers/user.controller.js";

const router = Router();

router.post("/signup", signUpController);
router.post("/login", loginController);
router.post("/logout", logoutController);
router.put("/", updateUserController);

export default router;
