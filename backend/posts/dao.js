import {Post} from "./model.js";
import {findUsersFollowing} from "../followers/dao.js";
import {Follow} from "../followers/model.js";

export const findAllPosts = () =>
  Post.find().sort({datePosted: -1}).populate('tagged').exec();

export const createNewPost = (newPost) =>
  Post.create(newPost);

export const findPostByPostId = (postId) =>
  Post.findById(postId);

export const findPostsByUserId = (userId) =>
  Post.find({authorId: userId}).sort({datePosted: -1}).exec();

export const findPostsForUsersHomepage = async (userId) => {
  const followedUsers = await Follow.find({ followerId: userId });
  const followedUserIds = followedUsers.map(follow => follow.followedId);
  followedUserIds.push(userId);
  return await Post.find({authorId: {$in: followedUserIds}}).populate('authorId');
}

  export const findPostsByTaggedItemId = async (spotifyLink) => {
    try {
      const posts = await Post.find({ 'tagged.spotifyLink': { $regex: spotifyLink } })
        .sort({ datePosted: -1 })
        .populate('tagged')
        .exec();
  
      return posts;
    } catch (error) {
      throw new Error('Error fetching posts by Spotify ID');
    }
  };

  export const deletePostById = (postId) =>
    Post.deleteOne({_id: postId});