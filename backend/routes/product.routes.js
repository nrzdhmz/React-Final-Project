import { Router } from "express";
import {
  createProductController,
  dislikeProductController,
  getLikedProductsController,
  getProductsController,
  likeProductController,
} from "../controllers/product.controller.js";

import validateData from "../middleware/validateData.js";
import productSchema from "../schemas/productSchema.js";

const router = Router();

router.post("/", validateData(productSchema), createProductController);
router.get("/", getProductsController);
router.get("/like", getLikedProductsController);
router.put("/like/:id", likeProductController);
router.delete("/like/:id", dislikeProductController);

export default router;
