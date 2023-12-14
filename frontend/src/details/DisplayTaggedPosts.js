import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import * as client from "../home/client";
import DisplayPostsList from "../postLists/DisplayPostsList";

/**
 * displays a user's posts
 */
function DisplayTaggedPosts({spotifyLink}) {
  const [posts, setPosts] = useState();

  const fetchPosts = async () => {
    const response = await client.getPostsByTaggedId(spotifyLink);
    setPosts(response.data);
 
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <div className="mt-4">
      <h4>My Posts</h4>

      {posts && <DisplayPostsList posts={posts}/>}
    </div>
  );
}

export default DisplayTaggedPosts;
