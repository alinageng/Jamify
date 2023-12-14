import Post from "./post";
import * as client from "../home/client";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

function DisplayEachUserPost({posts, userId}) {
  const [userPosts, setPosts] = useState([]);
  const { currentUser } = useSelector((state) => state.user);


  useEffect(() => {
    setPosts(posts);
  }, [posts]);

  const DeletePost = async (postId) => {
    try {
      const status = await client.deletePost(postId);
      setPosts(userPosts.filter((p) => p._id !== postId));
    } catch(error) {
      console.log("Couldn't delete")
    }
  }

  return (
    <ul className="list-group">
      {userPosts.map((post) =>
        <li className="list-group-item" key={post._id}>
          <Post post={post} showCommentsLink={true}/>
          {(currentUser?.role === 'ADMIN' || currentUser?._id === userId) && ( 
           <button type="button" className="btn btn-dark float-end" onClick={() => DeletePost(post._id)}>Delete</button>
          )
        }
        </li>
      )}
    </ul>

  )
}
export default DisplayEachUserPost;