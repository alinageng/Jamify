import {useSelector} from "react-redux";

/**
 * displays a user's posts
 */
function DisplayUserPosts({userId}) {
  const { currentUser } = useSelector((state) => (state.user))

  return (
    <div>
      <h5>displaying posts for {currentUser.username}</h5>
    </div>
  );
}

export default DisplayUserPosts;
