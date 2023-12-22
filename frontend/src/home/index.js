import 'bootstrap/dist/css/bootstrap.css';
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import DisplayPostsList from "../postLists/DisplayPostsList";
import * as client from "./client";
import {getUsersHomepagePosts} from "./client";
import image from "../images/Jamify.jpg"
import "./home.css"

function Home() {
  const [posts, setPosts] = useState();
  const { currentUser } = useSelector((state) => state.user);

  const callGetAllPosts = async () => {
    
    if (currentUser) {
      const response = await getUsersHomepagePosts(currentUser._id);
      setPosts(response)
    }
    else {
      const response = await client.getAllPosts();
      setPosts(response);
    }
  };

  useEffect(() => {
    callGetAllPosts();
  },[currentUser])

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

export default Home;