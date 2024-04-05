import { Request, Response } from "express";
import Post from "../models/Post";

export const createPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

// Example: Implementing getPostsByUser
export const getPostsByUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId } = req.params;
    const { page = 1, limit = 10 } = req.query as any; // Cast to any to handle query string parameters
    const posts = await Post.find({ author: userId })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    const count = await Post.countDocuments({ author: userId });
    res.json({
      posts,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const getAllPosts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { page = 1, limit = 10 } = req.query as any; // Cast to any to handle query string parameters
    const posts = await Post.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const getPostById = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).send("Post not found");
      return;
    }
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const updatePost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) {
      res.status(404).send("Post not found");
      return;
    }
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const deletePost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      res.status(404).send("Post not found");
      return;
    }
    res.send("Post deleted");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const searchPosts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { query } = req.query;
    const posts = await Post.find({ $text: { $search: query as string } }); // Cast the query parameter to string
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
