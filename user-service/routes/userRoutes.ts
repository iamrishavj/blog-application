import express from "express";

import {
  registerUser,
  loginUser,
  verifyToken,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/verifyToken", verifyToken);
// Fetch user profile information
router.get("/profile/:userId", getUserProfile);

// Update user profile information
router.put("/profile/:userId", updateUserProfile);

export default router;
