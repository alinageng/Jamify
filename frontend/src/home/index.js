import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import DisplayPostsList from "../postLists/DisplayPostsList";
import * as client from "./client";
import {getUsersHomepagePosts} from "./client";

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
  },[])

  return (
    <div className="container">
      <h1>Home</h1>
      <hr/>
      <div>
        {posts && <DisplayPostsList posts={posts}/>}
      </div>
    </div>
  )
}
export default Home;