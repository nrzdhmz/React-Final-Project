import express from "express";
import prisma from "./prismaClient/index.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import cors from "cors";

const PORT = process.env.PORT || 5100;

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  credentials: true,
};

// Middlewares
app.use(cors(corsOptions));
app.use(
  "/static",
  express.static("public", {
    maxAge: 1000 * 60 * 60 * 24 * 30 * 12,
  })
);
app.use(cookieParser());
app.use(express.json());

//Routes
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);

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

app.listen(PORT, () => console.log(`Running on ${PORT}`));
