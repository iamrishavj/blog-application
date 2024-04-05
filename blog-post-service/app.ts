import express, { ErrorRequestHandler } from "express";
import dotenv from "dotenv";
import { UnauthorizedError } from "express-jwt";

import { connectDB } from "./database";
import postRoutes from "./routes/postRoutes";

dotenv.config();

const app = express();
connectDB(); // Connect to MongoDB

app.use(express.json());
app.use("/api/posts", postRoutes);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof UnauthorizedError) {
    res.status(401).json({ message: "Invalid token" });
  } else {
    next(err);
  }
};

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
