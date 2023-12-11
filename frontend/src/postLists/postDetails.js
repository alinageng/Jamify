import {useEffect, useState} from "react";
import {getPostsComments} from "../home/client";

function PostDetails() {
  const [comments, setComments] = useState();
  //TODO get a postbyId, get its comments, make form to post new comment

  // const getComments = async () => {
  //   const response = await getPostsComments(post._id)
  //   setComments(response);
  // }
  //
  // useEffect(() => {
  //   getComments()
  // }, []);

  return (
    <div>
      <h3>post details</h3>
    </div>
  )
}
export default PostDetails;