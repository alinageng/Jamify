import * as dao from "./dao.js";
import {findUsersFollowers, findUsersFollowing} from "./dao.js";

function FollowsRoutes(app) {

  const getNumFollowers = async (req, res) => {
    const userId = req.params.userId;
    const response = await dao.countNumFollowers(userId);
    res.json(response);
  }

  const getNumFollowing = async (req, res) => {
    const userId = req.params.userId;
    const response = await dao.countNumFollowing(userId);
    res.json(response);
  }

  const getFollowers = async (req, res) => {
    const userId = req.params.userId;
    const response = await dao.findUsersFollowers(userId);
    res.json(response);
  }

  const getFollowing = async (req, res) => {
    const userId = req.params.userId;
    const response = await dao.findUsersFollowing(userId);
    res.json(response);
  }


  const removeFollow = async (req, res) => {
    const {followedId, followerId } = req.body;
    const status = await dao.unfollow(followedId, followerId);
    res.json(200);
  }

  const createFollow = async (req, res) => {
    const follow = req.body;
    const response = await dao.createNewFollow(follow);
    res.json(response);
  }

  app.get("/api/follow/:userId/num_followers", getNumFollowers);
  app.get("/api/follow/:userId/num_following", getNumFollowing);
  app.get("/api/follow/:userId/followers", getFollowers);
  app.get("/api/follow/:userId/following", getFollowing);
  app.post("/api/follow", createFollow);
  app.delete("/api/follow", removeFollow);
}

export default FollowsRoutes;