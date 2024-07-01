import prisma from "../prismaClient/index.js";
import handleError from "../utils/handleError.js";

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns
 */
export const addToCartController = async (req, res) => {
  try {
    const { user } = req;

    let { productId } = req.body;
    productId = Number(productId);
    const product = await prisma.product.findFirst({
      where: {
        id: productId,
      },
    });
    if (!product) return res.status(404).json({ error: "Product not found" });
    let cart = await prisma.cart.findFirst({
      where: {
        cusromerId: user.id,
      },
    });
    if (!cart)
      cart = await prisma.cart.create({
        data: {
          cusromerId: user.id,
        },
      });

    const existingProduct = await prisma.productItem.findFirst({
      where: {
        cartId: cart.id,
        productId,
      },
    });

    if (!existingProduct) {
      await prisma.productItem.create({
        data: {
          cartId: cart.id,
          productId: product.id,
        },
      });
      return res.status(200).json({ message: "Product added to cart" });
    }
    existingProduct.count = existingProduct.count + 1;
    await prisma.productItem.update({
      where: {
        id: existingProduct.id,
      },
      data: {
        count: existingProduct.count,
      },
    });
    return res.status(200).json({ message: "Product count increased" });
  } catch (err) {
    handleError(err, res);
  }
};

export const getCartController = async (req, res) => {
  try {
    const cart = await prisma.cart.findFirst({
      where: {
        cusromerId: req.user.id,
      },
    });
    if (!cart) {
      await prisma.cart.create({
        data: {
          customer: {
            connect: {
              id: req.user.id,
            },
          },
        },
      });
      return res.status(200).json([]);
    }
    const cartItems = await prisma.productItem.findMany({
      where: {
        cartId: cart.id,
      },
      select: {
        count: true,
        product: {
          select: {
            id: true,
            name: true,
            price: true,
            imageUrl: true,
          },
        },
      },
    });
    const data = cartItems.map(item => ({
      ...item.product,
      count: item.count,
    }));
    return res.status(200).json([...data]);
  } catch (err) {
    handleError(err, res);
  }
};

export const removeProductFromCartController = async (req, res) => {
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
    const cart = await prisma.cart.findFirst({
      where: {
        userId: user.id,
      },
    });
    if (!cart) return res.status(404).json({ error: "Cart not found" });
    const productItem = await prisma.productItem.findFirst({
      where: {
        cartId: cart.id,
        productId,
      },
    });
    if (!productItem)
      return res.status(404).json({ error: "Product not found in cart" });
    await prisma.productItem.delete({
      where: {
        id: productItem.id,
      },
    });
    return res.status(200).json({ message: "Product removed from cart" });
  } catch (err) {
    handleError(err, res);
  }
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns
 */
export const decreaseQuantityController = async (req, res) => {
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
    const cart = await prisma.cart.findFirst({
      where: {
        userId: user.id,
      },
    });
    if (!cart) return res.status(404).json({ error: "Cart not found" });
    const productItem = await prisma.productItem.findFirst({
      where: {
        cartId: cart.id,
        productId,
      },
    });
    if (!productItem)
      return res.status(404).json({ error: "Product not found in cart" });
    if (productItem.count <= 1) {
      await prisma.productItem.delete({
        where: {
          id: productItem.id,
        },
      });
      return res.status(200).json({ message: "Product removed from cart" });
    }
    await prisma.productItem.update({
      where: {
        id: productItem.id,
      },
      data: {
        count: productItem.count - 1,
      },
    });
    return res.status(200).json({ message: "Product quantity decreased" });
  } catch (err) {
    handleError(err, res);
  }
};
