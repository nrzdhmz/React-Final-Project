import express from "express";
import prisma from "./prismaClient/index.js";
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";

configDotenv();

const app = express();

// Middlewares
app.use(cookieParser());
app.use(express.json());

//Routes
app.use("/api/user", userRoutes);

// Shutdow database connection on shutdown
const shutdown = async () => {
  try {
    await prisma.$disconnect();
    console.log("Disconnected from database");
    process.exit(0);
  } catch (error) {
    console.error("Error during disconnection", error);
    process.exit(1);
  }
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

app.listen(3000, () => console.log("Running on 3000"));
