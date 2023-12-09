import {Post} from "./model.js";

export const findAllPosts = () =>
  Post.find().populate('tagged').exec();


export const createNewPost = (newPost) =>
  Post.create(newPost);

