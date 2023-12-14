import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import DisplayPostsList from "../postLists/DisplayPostsList";
import * as client from "./client";
import {getUsersHomepagePosts} from "./client";
import image from "../images/Jamify.jpg"
import "./home.css"

function Home() {
  const [posts, setPosts] = useState();
  const { currentUser } = useSelector((state) => state.user);

  const callGetAllPosts = async () => {
    if (currentUser) {
      const response = await getUsersHomepagePosts(currentUser._id);
      setPosts(response)
    }
    else {
      const response = await client.getAllPosts();
      setPosts(response);
    }
  };

  useEffect(() => {
    callGetAllPosts();
  },[])

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h1 class="text-color-logo">Home</h1>
        </div>
        <div className="text-center">
          <img src={image} alt="Jamify Logo" height="140px" />
          <h6 class="text-color-logo">Share your favorite albums and tracks from Spotify with your friends!</h6>
        </div>
        <div>
          {currentUser ? (
            <div className="text-end">
              <Link to='/search'>
                <button type="button" className="btn btn-primary me-2">
                  New Post
                </button>
              </Link>
              <Link to={`/profile/${currentUser._id}`}>
                <button type="button" className="btn btn-primary">
                  Account
                </button>
              </Link>
            </div>
          ) : (
            <Link to='/login'>
              <button type="button" className="btn btn-secondary">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
      <hr />
      <div>
        {posts && <DisplayPostsList posts={posts} />}
      </div>
    </div>
  );
}

export default Home;
    
//     <div className="container">
//       <img src={image} alt="Jamify Logo" height="80px" style={{ display: 'block', margin: '0 auto' }} />
//       <h1>Home</h1>
//       <div className="row">
//         <div className="col">
//           {currentUser?
//             <div>
//               <Link to='/search'>
//                 <button type="button" className="btn btn-primary">
//                   New Post
//                 </button>
//               </Link>
//               <Link to={`/profile/${currentUser._id}`}>
//                 <button type="button" className="btn btn-primary">
//                   Account
//                 </button>
//               </Link>
//             </div>
//             :
//             <Link to='/login'>
//             <button type="button" className="btn btn-primary">
//             Login
//             </button>
//             </Link>
//           }
//         </div>
//       </div>
//       <hr/>
//       <div>
//         {posts && <DisplayPostsList posts={posts}/>}
//       </div>
//     </div>
//   )
// }
// export default Home;