import { useNavigate } from "react-router";

function Navigation() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/home");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="nav-link" onClick={goHome}>
              Home
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
