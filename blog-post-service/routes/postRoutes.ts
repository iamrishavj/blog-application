import express from "express";

import {
  getPosts,
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  searchPosts,
  getPostsByUser,
} from "../controllers/postController";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.get("/", getAllPosts);
router.get("/search", searchPosts);
router.get("/user/:userId", getPostsByUser);
router.get("/:id", getPostById);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
