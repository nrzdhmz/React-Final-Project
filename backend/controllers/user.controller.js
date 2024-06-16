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
    console.log(`hashed: ${hashedPassword}`);
    const user = await prisma.user.create({
      data: { ...userData, password: hashedPassword },
    });
    if (user)
      return res.status(201).json({
        id: user.id,
        title: user.title,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      });
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
    if (!existingUser)
      return res.status(400).json({ error: "Invalid credentials" });
    if (!compare(userData.password, existingUser.password))
      return res.status(400).json({ error: "Invalid credentials" });
    const token = jwt.sign(existingUser.id, process.env.JWT_SECRET);
    res.cookie("token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 2,
      httpOnly: true,
    });
    return res.status(200).json({
      id: existingUser.id,
      title: existingUser.title,
      firstName: existingUser.firstName,
      lastName: existingUser.lastName,
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
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    const userId = Number(jwt.verify(token, process.env.JWT_SECRET));

    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    if (!user) return res.status(404).json({ error: "User not found" });

    const { body: userData } = req;

    delete userData.confirmPassword;

    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...userData,
      },
    });
    if (updatedUser)
      return res.status(200).json({ message: "User updated successfully" });

    return res.status(400).json({ error: "Bad request" });
  } catch (err) {
    handleError(err, res);
  }
};
