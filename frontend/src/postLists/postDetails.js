import React, {useEffect, useState} from "react";
import {getPostById, getPostsComments, submitNewComment} from "../home/client";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import TaggedItem from "../taggedItem";
import './postDetails.css';
import Post from "./post";


function PostDetails() {
  const [comments, setComments] = useState();
  const [post, setPost] = useState();
  const [newComment, setNewComment] = useState('');
  const { postId} = useParams();
  const { currentUser } = useSelector((state) => state.user);

  const getComments = async () => {
    const response = await getPostsComments(postId)
    setComments(response.data);
  }

  const getPost = async () => {
    const response = await getPostById(postId)
    setPost(response.data);
  }

  const handlePostNewComment = async () => {
    const temp = {description: newComment, post: postId, author: currentUser._id, authorUsername: currentUser.username};

    const status = await submitNewComment(temp);
    if (status.status === 200) {
      setNewComment("");
      getComments();
    }
  }

  useEffect(() => {
    getComments();
  }, [postId, comments]);

  useEffect(() => {
    getPost();
  }, [postId]);

  return (
    <div className="container">
      {post ?
        <div className="border rounded p-3 mt-4">
          <Post key={post._id} post={post} showCommentsLink={false}/>
        </div> :
        <h4>loading...</h4>
      }

      <h3 className="mt-4">Comments</h3>
      <div className="row form-group">
        <div className="col-sm-10">
          {currentUser ?
            <input type="text" className="form-control" value={newComment}
                   onChange={(e) => setNewComment(e.target.value)}
                   id="newComentInput" placeholder="Add a new Comment"/> :
            <input type="text" className="form-control" value="Login to add a comment" readOnly />
          }
        </div>
        <div className="col-sm-2">
          {currentUser ?
            <button className="btn btn-primary float-end" onClick={handlePostNewComment}>Post</button> :
            <button className="btn btn-primary float-end" disabled onClick={handlePostNewComment}>Post</button>
          }
        </div>
      </div>

      {comments?
        comments.length === 0 ?
          <h5 className="mt-2">no comments yet</h5> :
          <ul className="list-group mt-2">
            {comments.map((comment) => (
              <li className="list-group-item" key={comment._id}>
                <div className={"row"}>
                  <div className={"col-10"}>
                    <Link to={`/profile/${comment.author}`}>
                      <div className={"commentUsername"}>@{comment.authorUsername}</div>
                    </Link>
                  </div>
                  <div className={"col-2"}>
                    <div className={"float-end"}>{new Date(comment.datePosted).toLocaleDateString()}</div>
                  </div>
                </div>
                <div className={"commentDescription"}>{comment.description}</div>
              </li>
              ))}
          </ul> :
        <h4>loading...</h4>
      }
    </div>
  )
}
export default PostDetails;