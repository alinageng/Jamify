import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./nav.css"

function Navigation() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-bar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/home" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        {currentUser?.role === 'ADMIN' && (
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin" activeClassName="active-link">
              Admin
            </NavLink>
          </li>
        )
        }

        {currentUser && (
          <li className="nav-item">
            <NavLink className="nav-link" to={`/profile/${currentUser._id}`} activeClassName="active-link">
              Profile
            </NavLink>
          </li>
        )}

        {currentUser && (
          <li className="nav-item">
            <NavLink className="nav-link" to="/search" activeClassName="active-link">
              New Post
            </NavLink>
          </li>
        )}
        {!currentUser && (
          <li className="nav-item">
            <NavLink className="nav-link" to="/login" activeClassName="active-link">
              Log In
            </NavLink>
          </li>
        )}
        {!currentUser && (
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup" activeClassName="active-link">
              Sign Up
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
