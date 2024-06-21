import multer from "multer";
import path from "path";
import fs from "fs";
import prisma from "../prismaClient/index.js";

// For image uploads
// For image uploads
const storage = multer.diskStorage({
  destination: async (req, file, done) => {
    if (file && req.body.category) {
      const uploadDir = path.resolve(
        `./public/${req.body.category.toLowerCase()}/`
      );
      done(null, uploadDir);
    } else {
      const product = await prisma.product.findFirst({
        where: { id: Number(req.params.id) },
      });
      const uploadDir = path.resolve(
        `./public/${product.category.toLowerCase()}/`
      );
      done(null, uploadDir);
    }
  },
  filename: async (req, file, done) => {
    const ext = path.extname(file.originalname);
    if (req.params.id) done(null, `${req.params.id}${ext}`);
    else {
      const product = await prisma.product.findFirst({
        where: { id: Number(req.params.id) },
      });
      done(null, product.imageUrl.split("/")[1]);
    }
  },
});

const upload = multer({ storage });

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const checkFileInRequest = (req, res, next) => {
  const multerHandler =
    req.headers["content-type"] &&
    req.headers["content-type"].includes("multipart/form-data")
      ? upload.single("image")
      : upload.none();

  multerHandler(req, res, err => {
    if (err) {
      return res.status(400).send({ error: err.message });
    }
    next();
  });
};

export default checkFileInRequest;
