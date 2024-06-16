import { Router } from "express";
import {
  addToCartController,
  decreaseQuantityController,
  getCartController,
  increaseQuantityController,
  removeProductFromCartController,
} from "../controllers/cart.controller.js";

const router = Router();

router.get("/", getCartController);
router.post("/", addToCartController);
router.delete("/:id", removeProductFromCartController);
router.put("/decrease/:id", decreaseQuantityController);
router.put("/increase/:id", increaseQuantityController);

export default router;
