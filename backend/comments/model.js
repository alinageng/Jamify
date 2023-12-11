import mongoose from "mongoose";
import commentsSchema from "./schema.js";

export const Comment = mongoose.model('comments', commentsSchema);