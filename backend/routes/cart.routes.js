import { Router } from "express";
import {
  addToCartController,
  decreaseQuantityController,
  getCartController,
  removeProductFromCartController,
} from "../controllers/cart.controller.js";

const router = Router();

router.get("/", getCartController);
router.post("/", addToCartController);
router.delete("/:id", removeProductFromCartController);
router.put("/:id", decreaseQuantityController);

export default router;
