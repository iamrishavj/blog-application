import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

import User from "../models/User";

export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({ message: "Email already exists" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET as string,
        { expiresIn: "1h" }
      );
      res.status(201).json({ token });
    } else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const verifyToken = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token not found" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    res.json(decoded);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Token verification failed" });
  }
};

export const getUserProfile = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
};

export const updateUserProfile = async (req: Request, res: Response) => {
  const { username, fullName, bio } = req.body;
  const user = await User.findByIdAndUpdate(
    req.params.userId,
    { username, fullName, bio },
    { new: true }
  );
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
};
