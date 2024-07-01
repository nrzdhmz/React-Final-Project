import prisma from "../prismaClient/index.js";
import handleError from "../utils/handleError.js";
import jwt from "jsonwebtoken";

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const protectRoute = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    // Check if token is valid
    const userId = Number(jwt.verify(token, process.env.JWT_SECRET));
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    // Check if a user exists with userId
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    if (!user) return res.status(404).json({ error: "User not found" });

    if (user.customerId) {
      const customer = await prisma.customer.findFirst({
        where: {
          User: {
            some: {
              id: user.id,
            },
          },
        },
      });
      req.user = customer;
    } else {
      const admin = await prisma.admin.findFirst({
        where: {
          User: {
            some: {
              id: user.id,
            },
          },
        },
      });
      req.user = admin;
    }

    next();
  } catch (err) {
    handleError(err, res);
  }
};

export default protectRoute;
