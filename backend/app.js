import express from 'express';
import cors from "cors";
import Hello from "./hello.js";
import "dotenv/config";
import UserRoutes from "./users/routes.js";
import mongoose from "mongoose";
import session from "express-session";
import PostsRoutes from "./posts/routes.js";
import CommentsRoutes from "./comments/routes.js";
import FollowsRoutes from "./followers/routes.js";

mongoose.connect("mongodb://127.0.0.1:27017/alina");
//TEST
const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
  })
);
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));
app.use(express.json());
Hello(app)
UserRoutes(app)
PostsRoutes(app)
CommentsRoutes(app)
FollowsRoutes(app)
app.listen(process.env.PORT || 4000);