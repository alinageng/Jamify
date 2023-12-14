// import Follow from "./follow";
import {Link} from "react-router-dom";
import DisplayFollowInfo from "./DisplayFollowInfo";

function DisplayUserFollow({ follows, followType }) {
    return (
        <ul className="list-group">
      {follows.map((follow) => (
        <li className="list-group-item" key={follow._id}>
          {followType === 'followers' ? (
            <Link to={`/profile/${follow.followerId}`}>
            <h4>{"@" + follow.followerUsername}</h4>
            {<DisplayFollowInfo userId={follow.followerId}/>}
            </Link>
          ) : (
            <Link to={`/profile/${follow.followedId}`}>
            <h4>{"@" + follow.followedUsername}</h4>
            {<DisplayFollowInfo userId={follow.followedId}/>}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
export default DisplayUserFollow;