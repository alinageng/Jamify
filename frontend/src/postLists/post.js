import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getPostsComments} from "../home/client";

function Post({post}) {


  return (
    <li className="list-group-item">
      <Link to={`/profile?user_id=${post.author}`}>
        <h7> @{post.author}</h7>
      </Link>
      <h3> {post.description}</h3>
      {JSON.stringify(post.tagged)}
      <h3>Comments</h3>
      <Link to={`/post/${post._id}`}>
        <h4>view comments</h4>
      </Link>
    </li>
  )
}
export default Post;