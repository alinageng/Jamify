import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("users",schema); // give mongo collection 'users' a schema
export default model;