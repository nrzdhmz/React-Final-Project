/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 * @returns
 */
const allowAdmin = (req, res, next) => {
  if (!req.user.adminId)
    return res.res.status(401).json({ error: "Unauthorized" });
  next();
};

export default allowAdmin;
