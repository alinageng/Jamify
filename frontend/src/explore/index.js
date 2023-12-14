import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import DisplayPostsList from "../postLists/DisplayPostsList";
import * as client from "../home/client";
import image from "../images/Jamify.jpg"
import "../home/home.css"

function Explore() {
  const [posts, setPosts] = useState();

  const callGetAllPosts = async () => {
      console.log("explore results")
      const response = await client.getAllPosts();
      setPosts(response);
  };

  useEffect(() => {
    callGetAllPosts();
  },[])

  return (
    <div className="container">
      <div className="justify-content-between align-items-center">
        <div className="text-center">
          <img src={image} alt="Jamify Logo" height="140px" />
          <h6 class="text-color-logo">Share your favorite albums and tracks from Spotify with your friends!</h6>
        </div>
      </div>
      <hr />
      <div>
        {posts && <DisplayPostsList posts={posts} />}
      </div>
    </div>
  );
}

export default Explore;