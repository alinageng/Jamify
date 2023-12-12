import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
        </ul>
    </nav>
  );
}

export default Navigation;
