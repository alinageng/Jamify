import {useEffect, useState} from "react";
import {getPostById, getPostsComments, submitNewComment} from "../home/client";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";


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
      <div>
        <h3>@{post.author}</h3>
        <h4>{post.description}</h4>
        <h4>{JSON.stringify(post.tagged)}</h4>
      </div> :
        <h4>loading...</h4>
      }

      <h3>Comments</h3>
      <div className="row form-group">
        <div className="col-sm-10">
          <input type="text" className="form-control" value={newComment} onChange={(e) => setNewComment(e.target.value)} id="newComentInput" placeholder="Add a new Comment"/>
        </div>
        <div className="col-sm-2">
          <button className="btn btn-primary float-end" onClick={handlePostNewComment}>Post</button>
        </div>
      </div>

      {comments?
        comments.length === 0 ?
          <h5>no comments yet</h5> :
          <ul className="list-group mt-2">
            {comments.map((comment) => (
              <li className="list-group-item">
                <Link to={`/profile/${comment.author}`}>
                  <h5>@{comment.authorUsername}</h5>
                </Link>
                <text>{comment.description}</text>
              </li>
              ))}
          </ul> :
        <h4>loading...</h4>
      }
    </div>
  )
}
export default PostDetails;