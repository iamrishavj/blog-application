import mongoose, { Document } from "mongoose";

interface IPost extends Document {
  title: string;
  content: string;
  author: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
}

const PostSchema = new mongoose.Schema<IPost>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

// Enable text search on title and content
PostSchema.index({ title: "text", content: "text" });

const Post = mongoose.model<IPost>("Post", PostSchema);
export default Post;
