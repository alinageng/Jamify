import {Comment} from "./model.js";

export const createNewComment = (newComment) =>
  Comment.create(newComment);

export const findCommentsByPostId = (postId) =>
  Comment.find({post: postId});


