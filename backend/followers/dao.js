import {Follow} from "./model.js";

export const createNewFollow = (follow) =>
  Follow.create(follow);

export const findUsersFollowers = (userId) =>
  Follow.find({followedId: userId});

export const findUsersFollowing = (userId) =>
  Follow.find({followerId: userId});

export const findFollow = (followedId, followerId) => {
  Follow.findOne({ followedId: followedId, followerId: followerId });
}

export const unfollow = (followedId, followerId) =>
  Follow.deleteOne({followedId: followedId, followerId: followerId});

export const countNumFollowers = (userId) =>
  Follow.countDocuments({followedId: userId});

export const countNumFollowing = (userId) =>
  Follow.countDocuments({followerId: userId});




