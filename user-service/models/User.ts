import mongoose from "mongoose";

interface IUser {
  username: string;
  email: string;
  password: string;
  fullName: string;
  bio: string;
}

const UserSchema = new mongoose.Schema<IUser>({
  username: { type: String, required: false, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: false },
  bio: { type: String, required: false },
});

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
