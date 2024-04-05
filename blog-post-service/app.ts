import express, { ErrorRequestHandler } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { UnauthorizedError } from "express-jwt";

import postRoutes from "./routes/postRoutes";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

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
