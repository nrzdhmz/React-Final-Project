import { compare, hash } from "bcrypt";
import prisma from "../prismaClient/index.js";
import handleError from "../utils/handleError.js";
import jwt from "jsonwebtoken";

const saltRounds = 10;

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const signUpController = async (req, res) => {
  try {
    const { body: userData } = req;
    const existingUser = await prisma.user.findFirst({
      where: {
        email: userData.email,
      },
    });
    if (existingUser)
      return res
        .status(400)
        .json({ error: "User already exists with that email" });

    const hashedPassword = await hash(userData.password, saltRounds);

    const user = await prisma.user.create({
      data: { email: userData.email, password: hashedPassword },
    });
    if (userData.role === "customer") {
      const customer = await prisma.customer.create({
        data: {
          title: userData.title,
          firstName: userData.firstName,
          lastName: userData.lastName,
          User: {
            connect: {
              id: user.id,
            },
          },
        },
      });

      if (customer)
        return res.status(201).json({
          id: user.id,
          title: customer.title,
          email: user.email,
          firstName: customer.firstName,
          lastName: customer.lastName,
        });
    } else if (userData.role === "admin") {
      const admin = await prisma.admin.create({
        data: {
          User: {
            connect: {
              id: user.id,
            },
          },
        },
      });

      if (admin)
        return res.status(201).json({
          id: user.id,
          email: user.email,
        });
    }

    return res.status(400).json({ error: "Bad request" });
  } catch (err) {
    handleError(err, res);
  }
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const loginController = async (req, res) => {
  try {
    const { body: userData } = req;
    const existingUser = await prisma.user.findFirst({
      where: {
        email: userData.email,
      },
    });

    if (
      !existingUser ||
      !(await compare(userData.password, existingUser.password))
    )
      return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign(existingUser.id, process.env.JWT_SECRET);

    res.cookie("token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 2,
      httpOnly: true,
    });

    // User is customer
    if (existingUser.customerId) {
      const customer = await prisma.customer.findFirst({
        where: {
          id: existingUser.customerId,
        },
      });
      return res.status(200).json({
        id: existingUser.id,
        title: customer.title,
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: existingUser.email,
      });
    }

    // User is an admin
    return res.status(200).json({
      id: existingUser.id,
      email: existingUser.email,
    });
  } catch (err) {
    handleError(err, res);
  }
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */

export const logoutController = (req, res) => {
  req.cookies.token = null;
  return res.status(200).json({ message: "Logged out successsfully" });
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const updateUserController = async (req, res) => {
  try {
    const { user } = req;

    if (user.adminId) return res.status(400).json({ error: "Bad Request" });

    const { body: userData } = req;

    if (await compare(userData.currentPassword, user.password)) {
      userData.newPassword = await hash(userData.newPassword, saltRounds);
    } else {
      return res.status(400).json({ error: "Invalid password" });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        email: userData.email ? userData.email : user.email,
        firstName: userData.firstName ? userData.firstName : user.firstName,
        lastName: userData.lastName ? userData.lastName : user.lastName,
        password: userData.newPassword,
      },
    });
    if (updatedUser)
      return res.status(200).json({ message: "User updated successfully" });

    return res.status(400).json({ error: "Bad request" });
  } catch (err) {
    handleError(err, res);
  }
};
