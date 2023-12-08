import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: String,
    role: {
      type: String,
      default: "USER",
      enum: ["USER", "ARTIST", "ADMIN"],
    },
  },
  { collection: "users" }
);
export default schema;