import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getPostsComments} from "../home/client";
import Post from "./post";

function DisplayPostsList({posts}) {

  return (
    <ul className="list-group">
      {posts.map((post) =>
        <li className="list-group-item">
          <Post key={post._id} post={post} showCommentsLink={true}/>
        </li>
      )}
    </ul>

  )
}
export default DisplayPostsList;