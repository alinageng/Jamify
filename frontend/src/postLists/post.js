import {Link} from "react-router-dom";
import TaggedItem from "../taggedItem";
import './post.css';

function Post({post, showCommentsLink}) {

  return (
    <div>
      <div className={"row"}>
        <div className={"col-10"}>
          <Link to={`/profile/${post.authorId}`} >
            @{post.authorUsername}
          </Link>
        </div>
        <div className={"col-2"}>
          <div className={"float-end"}>{new Date(post.datePosted).toLocaleDateString()}</div>
        </div>

      </div>

      <h4> {post.description}</h4>
      <TaggedItem taggedItem={post.tagged}/>
      {showCommentsLink &&
        <Link to={`/post/${post._id}`}>
          <h5 className="mt-2">View comments</h5>
        </Link>
      }
    </div>
  )
}
export default Post;