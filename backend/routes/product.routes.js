import { Router } from "express";
import { createProductController, dislikeProductController, getProductsController, likeProductController } from "../controllers/product.controller.js";

const router = Router()

router.post("/", createProductController)
router.get("/", getProductsController)
router.put("/like/:id", likeProductController)
router.delete("/like/:id", dislikeProductController)

export default router