import Post from "./post";
import "./post.css"

function DisplayPostsList({posts}) {

  return (
    <ul className="list-group">
      {posts.map((post) =>
        <li className="list-group-item" key={post._id}>
          <Post post={post} showCommentsLink={true}/>
        </li>
      )}
    </ul>

  )
}
export default DisplayPostsList;