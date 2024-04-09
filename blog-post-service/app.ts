import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./database";
import postRoutes from "./routes/postRoutes";

dotenv.config();

const app = express();
connectDB(); // Connect to MongoDB

app.use(express.json());
app.use("/", postRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
