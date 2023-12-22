import React, { useState } from "react";
import * as client from "./client";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { setCurrentUser } from "./userReducer";
import { useDispatch } from "react-redux";
import './index.css';

function SignIn() {
  const [error, setError] = useState(null);
  const [account, setAccount] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signIn = async () => {
    try {
      const currentUser = await client.signIn(account);
      dispatch(setCurrentUser(currentUser));
      navigate(`/profile/${currentUser._id}`);
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };
  return (
    <div className="container">
      <h1>Sign In</h1>
      <hr/>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className={"col signinCol"}>
        <form>
          <label htmlFor="usernameInput">
            Username
          </label>
          <input
            type="text"
            id="usernameInput"
            className="form-control"
            value={account.username}
            onChange={(e) => setAccount({ ...account, username: e.target.value })}
          />
          <label htmlFor="passwordInput">
            Password
          </label>
          <input
            type="password"
            id="passwordInput"
            className="form-control"
            value={account.password}
            onChange={(e) => setAccount({ ...account, password: e.target.value })}
          />
          <div className="float-end mt-4">
            <Link to="/register" className="btn btn-light margin10">
              Sign Up
            </Link>
            <button onClick={signIn} className="btn btn-light ml-2 update-button">
              Sign In
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default SignIn;
