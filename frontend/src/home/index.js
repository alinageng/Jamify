import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllPosts} from "./client";
import {getTrackDetails} from "../utils/spotify-service";


/**
 * TODO
 * 1. keep track if user is logged in or not
 * if logged in: redirect to profile
 * if not: redirect to users in page
 */
function Home() {

  const [posts, setPosts] = useState();

  const callGetAllPosts = async () => {
    try {
      const response = await getAllPosts();
      setPosts(response);
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  useEffect(() => {
    callGetAllPosts();
  },[])

  return (
    <div className="container">
      <h1>Home</h1>
      <div className="row">
        <div className="col">
          <Link to='/search'>
            <button type="button" className="btn btn-primary">
              New Post
            </button>
          </Link>

          <nav>
              <Link to='/profile'>
                <button type="button" className="btn btn-primary">
                  [insert profile pic]
                </button>
              </Link>

              <Link to='/login'>
                <button type="button" className="btn btn-primary">
                  Login
                </button>
              </Link>
          </nav>
        </div>
      </div>
      <hr/>

      <div>
        {posts && JSON.stringify(posts)}

      </div>

    </div>
  )
}
export default Home;