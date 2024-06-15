import prisma from "../prismaClient/index.js";
import handleError from "../utils/handleError.js";

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const createProduct = async (req, res) => {
  try {
    const { body: productData } = req;
    if (!["Women", "Men"].includes(productData.category))
      throw new Error("Invalid category");
    const newProduct = await prisma.product.create({
      data: {
        ...productData,
      },
    });
    return res.status(201).json({ ...newProduct });
  } catch (err) {
    handleError(err, res);
  }
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const getProducts = async (req, res) => {
  return res
    .status(200)
    .json([
      ...(await (req.query.category
        ? prisma.product.findMany({ where: { category: req.query.category } })
        : prisma.product.findMany())),
    ]);
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });
    if (!product)
      return res.status(404).json({ error: "Product does not exist" });
    await prisma.product.delete({
      where: {
        id: product.id,
      },
    });
    return res.status(204);
  } catch (err) {
    handleError(err, res);
  }
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const updateProduct = async (req, res) => {
  try {
    const { body: productData } = req;
    const { id } = req.params;
    const product = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        ...productData,
      },
    });
    return res.status(200).json({ ...product });
  } catch (err) {
    handleError(err, res);
  }
};
