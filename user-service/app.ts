import express from "express";
import { connectDB } from "./database";
import userRoutes from "./routes/userRoutes";
import dotenv from "dotenv";
dotenv.config();

const app = express();
connectDB(); // Connect to MongoDB

app.use(express.json()); // Middleware for parsing JSON bodies

// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
