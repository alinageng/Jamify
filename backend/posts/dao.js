import {Post} from "./model.js";
import {Follow} from "../followers/model.js";

export const findAllPosts = () =>
  Post.find().sort({datePosted: -1}).populate('tagged').exec();

export const createNewPost = (newPost) =>
  Post.create(newPost);

export const findPostByPostId = (postId) =>
  Post.findById(postId);

export const findPostsByUserId = (userId) =>
  Post.find({authorId: userId}).sort({createdAt: -1}).exec();

export const findPostsForUsersHomepage = async (userId) => {
  const followedUsers = await Follow.find({ followerId: userId });
  const followedUserIds = followedUsers.map(follow => follow.followedId);
  return await Post.find({authorId: {$in: followedUserIds}}).populate('authorId');
}