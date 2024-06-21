import { Router } from "express";
import multer from "multer";
import path from "path";

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

// For image uploads
const storage = multer.diskStorage({
  destination: (req, file, done) => {
    const uploadDir = `./public/${req.body.category.toLowerCase()}/`;
    done(null, uploadDir);
  },
  filename: (req, file, done) => {
    const ext = path.extname(file.originalname);
    done(null, `${req.body.name}${ext}`);
  },
});

const upload = multer({ storage });

router.post(
  "/",
  protectRoute,
  allowAdmin,
  upload.single("image"),
  validateData(productSchema),
  createProductController
);
router.delete("/:id", allowAdmin, deleteProductController);
router.get("/", getProductsController);
router.get("/like", protectRoute, getLikedProductsController);
router.put("/like/:id", protectRoute, likeProductController);
router.delete("/like/:id", protectRoute, dislikeProductController);

export default router;
