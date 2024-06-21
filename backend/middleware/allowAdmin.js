import prisma from "../prismaClient/index.js";

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 * @returns
 */
const allowAdmin = async (req, res, next) => {
  const user = await prisma.user.findFirst({
    where: {
      id: req.user.id,
    },
  });
  if (!user.adminId) return res.status(401).json({ error: "Unauthorized" });
  next();
};

export default allowAdmin;
