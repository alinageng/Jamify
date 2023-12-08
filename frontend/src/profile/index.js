import { useSelector } from "react-redux";
import React from "react";
import PostLists from "../postLists/PostLists";

// TODO followers and following and posts
function Profile() {
  const { firstName, lastName, username, id } = useSelector((state) => state.user);

  return (
    <div className="container">
      <h1>Profile</h1>
      <div className="row">
        <div className="col">
          <h2>Welcome Back {firstName} {lastName}</h2>
        </div>
        <div className="col">

          <button  className="btn btn-primary float-end">
            Edit Profile
          </button>
          <button className="btn btn-primary float-end">
            Logout
          </button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          @{username}
        </div>
        <div className="col">
          10 followers
        </div>
        <div className="col">
          10 following
        </div>
      </div>
      <div className="mt-4">
        <PostLists userId={id}/>
      </div>
    </div>
  )
}

export default Profile;