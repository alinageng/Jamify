import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllPosts} from "./client";
import {getTrackDetails} from "../utils/spotify-service";
import DisplayPostsList from "../postLists/DisplayPostsList";

function Home() {
  const [posts, setPosts] = useState();
  const { currentUser } = useSelector((state) => state.user);

  const callGetAllPosts = async () => {
    console.log(currentUser);
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
          {currentUser?
            <div>
              <Link to='/search'>
                <button type="button" className="btn btn-primary">
                  New Post
                </button>
              </Link>
              <Link to='/profile'>
                <button type="button" className="btn btn-primary">
                  [insert profile pic]
                </button>
              </Link>
            </div>
            :
            <Link to='/login'>
            <button type="button" className="btn btn-primary">
            Login
            </button>
            </Link>
          }
        </div>
      </div>
      <hr/>

      <div>
        {posts && <DisplayPostsList posts={posts}/>}
      </div>

    </div>
  )
}
export default Home;