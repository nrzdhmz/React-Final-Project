import { Router } from "express";

// Controllers
import {
  createProductController,
  deleteProductController,
  dislikeProductController,
  getLikedProductsController,
  getProductsController,
  likeProductController,
} from "../controllers/product.controller.js";

// Middlewares
import validateData from "../middleware/validateData.js";
import productSchema from "../schemas/productSchema.js";
import protectRoute from "../middleware/protectRoute.js";
import allowAdmin from "../middleware/allowAdmin.js";

const router = Router();

router.post(
  "/",
  allowAdmin,
  validateData(productSchema),
  createProductController
);

router.delete("/:id", allowAdmin, deleteProductController);
router.get("/", getProductsController);
router.get("/like", protectRoute, getLikedProductsController);
router.put("/like/:id", protectRoute, likeProductController);
router.delete("/like/:id", protectRoute, dislikeProductController);

export default router;
