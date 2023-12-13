import {Follow} from "./model.js";

export const createNewFollow = (follow) =>
  Follow.create(follow);

export const findUsersFollowers = (userId) =>
  Follow.find({following: userId});

export const findUsersFollowing = (userId) =>
  Follow.find({followed: userId});

export const unfollow = (followedId, followerId) =>
  Follow.deleteOne({followed: followedId, followerId: followerId});

export const countNumFollowers = (userId) =>
  Follow.countDocuments({followed: userId});

export const countNumFollowing = (userId) =>
  Follow.countDocuments({following: userId});




