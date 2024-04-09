import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./database";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();
connectDB(); // Connect to MongoDB

app.use(express.json()); // Middleware for parsing JSON bodies

// Routes
app.use("/", userRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
