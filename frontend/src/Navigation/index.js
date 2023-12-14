import { Link } from "react-router-dom";
import { currentUser } from "../users/userReducer";
import {useDispatch, useSelector} from "react-redux";


function Navigation() {
  // const { currentUser } = useSelector((state) => state.user);
  // const displayProfile = async(currentUser) => {
  //   if (currentUser) {
  //     <Link to={`/profile/${currentUser._id}`}>
  //       Profile
  //     </Link>
  //   }
  // }
;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Log In 
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              Sign Up
            </Link>
          </li>
          
        </ul>
    </nav>
  );
}

export default Navigation;
