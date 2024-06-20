import { Router } from "express";

// Controller
import {
  addToCartController,
  decreaseQuantityController,
  getCartController,
  removeProductFromCartController,
} from "../controllers/cart.controller.js";

// Middlewares
import protectRoute from "./../middleware/protectRoute.js";

const router = Router();

router.get("/", protectRoute, getCartController);
router.post("/", protectRoute, addToCartController);
router.delete("/:id", protectRoute, removeProductFromCartController);
router.put("/:id", protectRoute, decreaseQuantityController);

export default router;
