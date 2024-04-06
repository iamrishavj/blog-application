import express from "express";

import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// Fetch user profile information
router.get("/profile/:userId", getUserProfile);

// Update user profile information
router.put("/profile/:userId", updateUserProfile);

export default router;
