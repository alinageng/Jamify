import { useSelector } from "react-redux";
import React, {useEffect, useState} from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import DisplayUserPosts from "../postLists/DisplayUserPosts";

import * as client from "../users/client";
import "./profile.css";
import {getUserInfo} from "../users/client";


// TODO followers and following and posts
function Profile() {
  const {userId} = useParams();
  const [userInfo, setUserInfo] = useState();
  const [numFollowers, setNumFollowers] = useState(-1);
  const [numFollowing, setNumFollowing] = useState(-1);
  const { currentUser } = useSelector((state) => state.user); // TODO check if this is the currentUser's profile
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const navigate = useNavigate();

  const signout = async () => {
    await client.signout();
    navigate("../../home");
    window.location.reload(false);
  };

  const handleIsMyProfile = async () => {
    if (currentUser) { //if logged in
      if (currentUser._id === userId) { // is this currentUser's profile?
        setIsMyProfile(true);
      }
      else {
        console.log("this should print");
        const response = await client.isFollowing(userId, currentUser._id); // check if currentUser follows this profile
        setIsFollowing(response);
        console.log("isfollowing: ", response);
      }
    }
  }

  const fetchUserInfo = async ()=> {
    try {
      const userInfo = await client.getUserInfo(userId);
      setUserInfo(userInfo);
    } catch (error) {}
  }

  const fetchFollows = async ()=> {
    try {
      const numFollows = await client.getNumFollowers(userId);
      setNumFollowers(numFollows);
      const numFollowing = await client.getNumFollowing(userId);
      setNumFollowing(numFollowing);
    } catch (error) {}
  }

  useEffect(() => {
    fetchUserInfo();
    fetchFollows();
    handleIsMyProfile();
  },[userId, isFollowing])

  const handleFollow = async () => {
    try {
      const newFollow = {followedId: userId, followedUsername: userInfo.username, followerId: currentUser._id, followerUsername: currentUser.username};
      console.log("new follow: ", newFollow);
      const status = await client.createFollow(newFollow);
      console.log("status: ", status);
      if (status === 200) {
        setIsFollowing(true);
      }
    } catch(error) {
      console.log("Couldn't follow")
    }
  }

  const handleUnfollow = async () => {
    try {
      const status = await client.deleteFollow(userId, currentUser._id);
      if (status === 200) {
        setIsFollowing(false);
      }
    } catch(error) {
      console.log("Couldn't unfollow")
    }
  }

  return (
    <div className="container">
      {(currentUser &&
        isMyProfile) && <button className="btn btn-dark float-end" onClick={signout}>
        Logout
      </button>}
      <br></br>

      {(currentUser &&
        isMyProfile) &&
      <h1>My Profile</h1>
      }     
       <hr></hr>
      {/* {JSON.stringify(userInfo)} */}
      {userInfo &&
        <div>
          <div className="row">
            <div className="col">
              <div className={"nameText"}>{userInfo.firstName} {userInfo.lastName}</div>
            </div>
            <div className="col">
              {currentUser?
                isMyProfile?
                  <button  className="btn btn-light float-end">
                    <Link to="/edit-profile"> Edit Profile </Link>
                  </button> :
                  isFollowing ?
                    <button  className="btn btn-light update-button float-end" onClick={handleUnfollow}>
                      Unfollow
                    </button> :
                    <button  className="btn btn-light update-button float-end" onClick={handleFollow}>
                      Follow
                    </button>
                : <Link to='/login'>
                    <button type="button" className="btn btn-primary float-end">
                      Login to follow
                    </button>
                  </Link>
              }
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              @{userInfo.username}
            </div>
            <div className="col">
              <Link to={`followers`}>
                {numFollowers} Followers
              </Link>
            </div>
            <div className="col">
              <Link to={`following`}>
              {numFollowing} Following
              </Link>
            </div>
          </div>
          <div className="mt-4">
            <hr></hr>
            <DisplayUserPosts userId={userInfo._id}/>
          </div>
        </div>
      }
    </div>
  )
}

export default Profile;