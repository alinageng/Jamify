// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// function Navigation() {
//   const { currentUser } = useSelector((state) => state.user); // TODO check if this is the currentUser's profile
//   console.log("current user " + currentUser.role)

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link className="nav-link" to="/home">
//               Home
//             </Link>
//           </li>
//         {currentUser.role === 'ADMIN' && ( // Use && to conditionally render the Admin link
//           <li className="nav-item">
//             <Link className="nav-link" to="/admin">
//               Admin
//             </Link>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// }

// export default Navigation;

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navigation() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/home">
            Home
          </Link>
        </li>
        {currentUser?.role === 'ADMIN' && ( // Use optional chaining to avoid null errors
          <li className="nav-item">
            <Link className="nav-link" to="/admin">
              Admin
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
