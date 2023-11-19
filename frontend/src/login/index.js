import { Link } from 'react-router-dom';

/**
 * Need to handle button's on click.
 */
function Login() {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <Link to='/profile'>
          <button type="button" className="btn btn-danger" >
            Sign in
          </button>
        </Link>
      </div>
    </div>
    )
}

export default Login;