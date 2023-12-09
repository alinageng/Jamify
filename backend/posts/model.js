import mongoose from "mongoose";
import postSchema from "./schema.js";

export const Post = mongoose.model('posts', postSchema);