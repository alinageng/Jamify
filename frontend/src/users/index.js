import React, { useState } from "react";
import * as client from "./client";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setCurrentUser } from "./userReducer";
import { useDispatch } from "react-redux";
import './index.css';

function SignIn() {
  const { currentUser } = useSelector((state) => state.user);
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
      setError(error);
    }
  };
  return (
    <div className={"container"}>
      <h1>Sign In</h1>
      {error && <div className="alert alert-danger">{error.message}</div>}
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
            <Link to="/signup" className="btn btn-light margin10">
              Sign Up
            </Link>
            <button onClick={signIn} className="btn btn-primary ml-2">
              Sign In
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default SignIn;
