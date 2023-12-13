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
  const [numFollowers, setNumFollowers] = useState();
  const [numFollowing, setNumFollowing] = useState();
  const { id } = useSelector((state) => state.user); // TODO check if this is the currentUser's profile
  const navigate = useNavigate();

  const signout = async () => {
    await client.signout();
    navigate("../../home");
    window.location.reload(false);
  };

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
  },[userId])

  return (
    <div className="container">
      <h1>Profile</h1>
      {JSON.stringify(userInfo)}
      {userInfo &&
        <div>
          <div className="row">
            <div className="col">
              <div className={"nameText"}>{userInfo.firstName} {userInfo.lastName}</div>
            </div>
            <div className="col">
              <button  className="btn btn-primary float-end">
                Edit Profile
              </button>
              <button className="btn btn-primary float-end" onClick={signout}>
                Logout
              </button>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              @{userInfo.username}
            </div>
            <div className="col">
              <Link to={`followers`}>
                {numFollowers} followers
              </Link>
            </div>
            <div className="col">
              <Link to={`following`}>
              {numFollowing} following
              </Link>
            </div>
          </div>
          <div className="mt-4">
            <DisplayUserPosts userId={userInfo._id}/>
          </div>
        </div>
      }
    </div>
  )
}

export default Profile;