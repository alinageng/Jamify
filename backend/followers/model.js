import mongoose from "mongoose";
import schema from "./schema.js";

export const Follow = mongoose.model('followers', schema);