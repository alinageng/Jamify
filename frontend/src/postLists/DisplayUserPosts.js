import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import * as client from "../home/client";
import DisplayPostsList from "../postLists/DisplayPostsList";

/**
 * displays a user's posts
 */
function DisplayUserPosts({userId}) {
  const [posts, setPosts] = useState();

  const fetchPosts = async () => {
    try {
      const response = await client.getPostsByUserId(userId);
      setPosts(response.data);
    } catch(error) {}
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <div>
      <h5>displaying posts written by user</h5>
      {posts && <DisplayPostsList posts={posts}/>}
    </div>
  );
}

export default DisplayUserPosts;
