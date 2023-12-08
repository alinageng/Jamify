import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


/**
 * TODO
 * 1. keep track if user is logged in or not
 * if logged in: redirect to profile
 * if not: redirect to login in page
 */
function Home() {


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

    </div>
  )
}
export default Home;