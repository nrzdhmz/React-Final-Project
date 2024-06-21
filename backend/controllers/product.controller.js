import multer from "multer";
import prisma from "../prismaClient/index.js";
import handleError from "../utils/handleError.js";
import fs from "fs";
import path from "path";

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const createProductController = async (req, res) => {
  const fileName = `${req.body.category.toLowerCase()}/${req.file.filename}`;
  try {
    const product = await prisma.product.findFirst({
      where: {
        name: req.body.name,
      },
    });
    if (product)
      return res.status(400).json({ error: "Product already exists" });
    const createdProduct = await prisma.product.create({
      data: {
        category: req.body.category,
        name: req.body.name,
        price: Number(req.body.price),
        imageUrl: fileName,
      },
    });
    return res.status(201).json(createdProduct);
  } catch (err) {
    fs.unlink(`./public/${fileName}`, err => console.log(err));
    handleError(err, res);
  }
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const getProductsController = async (req, res) => {
  try {
    if (req.query.category) {
      const products = await prisma.product.findMany({
        where: {
          category: req.query.category,
        },
      });
      return res.status(200).json([...products]);
    }
    const products = await prisma.product.findMany();
    res.set("Cache-Control", "public, max-age=31557600");
    return res.status(200).json(products);
  } catch (err) {
    handleError(err, res);
  }
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const updateProductController = async (req, res) => {
  const id = Number(req.params.id);

  const product = await prisma.product.findFirst({ where: { id } });

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  try {
    const { body: productData } = req;

    const newProductData = {};

    if (productData.name) {
      const product = await prisma.product.findFirst({
        where: {
          name: productData.name,
        },
      });
      if (product) {
        return res.status(400).json({ error: "Product already exists" });
      }
      newProductData.name = productData.name;
    }
    if (productData.category) newProductData.category = productData.category;
    if (productData.price) newProductData.price = Number(productData.price);
    if (req?.file?.filename)
      newProductData.imageUrl = `${
        newProductData.category
          ? newProductData.category.toLowerCase()
          : product.category.toLowerCase()
      }/${req.file.filename}`;

    const updated = await prisma.product.update({
      where: {
        id: product.id,
      },
      data: { ...newProductData },
    });
    if (
      req?.file?.filename.split(".")[1] !==
      product.imageUrl.split("/")[1].split(".")[1]
    )
      fs.unlink(`./public/${product.imageUrl}`, err => console.log(err));
    return res.status(200).json(updated);
  } catch (err) {
    if (req.file) {
      fs.unlink(
        `./public/${product.category.toLowerCase()}/${req.file.filename}`
      );
    }
    handleError(err, res);
  }
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const likeProductController = async (req, res) => {
  try {
    const { user } = req;

    let { id: productId } = req.params;
    productId = Number(productId);

    const product = await prisma.product.findFirst({
      where: {
        id: productId,
      },
    });
    if (!product) return res.status(404).json({ error: "Product not found" });

    if (
      await prisma.user.findFirst({
        where: {
          id: user.id,
          likedProducts: {
            some: {
              id: productId,
            },
          },
        },
      })
    )
      return res.status(400).json({ error: "Product already liked" });

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        likedProducts: {
          connect: {
            id: productId,
          },
        },
      },
    });
    return res.status(200).json({ message: "Product liked successfully" });
  } catch (err) {
    handleError(err, res);
  }
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const dislikeProductController = async (req, res) => {
  try {
    const { user } = req;

    let { id: productId } = req.params;
    productId = Number(productId);

    const product = await prisma.product.findFirst({
      where: {
        id: productId,
      },
    });
    if (!product) return res.status(404).json({ error: "Product not found" });

    if (
      !(await prisma.user.findFirst({
        where: {
          id: user.id,
          likedProducts: {
            some: {
              id: productId,
            },
          },
        },
      }))
    )
      return res.status(400).json({ error: "Product not liked" });

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        likedProducts: {
          disconnect: {
            id: productId,
          },
        },
      },
    });
    return res.status(200).json({ message: "Product disliked successfully" });
  } catch (err) {
    handleError(err, res);
  }
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const getLikedProductsController = async (req, res) => {
  try {
    const { user } = req;

    const likedProducts = await prisma.user.findFirst({
      where: {
        id: user.id,
      },
      select: {
        likedProducts: {
          select: {
            id: true,
            name: true,
            price: true,
            imageUrl: true,
          },
        },
      },
    });
    if (!likedProducts)
      return res.status(404).json({ error: "User not found" });
    return res.status(200).json(likedProducts.likedProducts);
  } catch (err) {
    handleError(err, res);
  }
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const deleteProductController = async (req, res) => {
  try {
    const { id: productId } = req;
    const product = await prisma.product.findFirst({
      where: {
        id: productId,
      },
    });
    if (!product) return res.status(404).json({ error: "Product Not Found" });
    await prisma.product.delete({
      where: {
        id: product.id,
      },
    });
    return res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    handleError(err, res);
  }
};
