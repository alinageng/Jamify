import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import { setCurrentUser } from "./userReducer";
import { useDispatch } from "react-redux";
import "./user.css"

function Signup() {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    username: "", 
    password: "",  
    firstName: "", 
    lastName: "", 
    email: "", 
    role: "USER", 
    spotify_username: "" });

  const navigate = useNavigate();
  const signup = async () => {
    try {
        const currentUser = await client.signup(credentials);
        dispatch(setCurrentUser(currentUser));
        navigate(`/profile/${currentUser._id}`);
      } catch (error) {
        setError(error);
      }
  }
  const handleRoleChange = (e) => {
    setCredentials({
      ...credentials,
      role: e.target.value,
    });
  };
  return (
    <div className="container">
      <h1>Sign Up</h1>
      {error && <div>{error}</div>}
      <input className="form-control mt-4"
        value={credentials.username}
        placeholder="username"
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />

      <input className="form-control mt-2"
        type="password"
        value={credentials.password}
        placeholder="password"
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />

        <input className="form-control mt-2"
        value={credentials.firstName}
        placeholder="first name"
        onChange={(e) => setCredentials({
          ...credentials,
          firstName: e.target.value })} />

        <input className="form-control mt-2"
        value={credentials.lastName}
        placeholder="last name"
        onChange={(e) => setCredentials({
          ...credentials,
          lastName: e.target.value })} />

        <input className="form-control mt-2"
        type="email"
        value={credentials.email}
        placeholder="email"
        onChange={(e) => setCredentials({
          ...credentials,
          email: e.target.value })} />

        <input className="form-control mt-2"
        value={credentials.spotify_username}
        placeholder="spotify username"
        onChange={(e) => setCredentials({
          ...credentials,
          spotify_username: e.target.value })} />

    <div>
      <label for="roleSelect">
        Role
      </label>
      <div id="roleSelect" className="form-check">
        <label>
          <input
            type="checkbox"
            className="form-check-input"
            name="role"
            value="USER"
            checked={credentials.role === "USER"}
            onChange={handleRoleChange}
          />
          User
        </label>
      <br/>
        <label>
          <input
            type="checkbox"
            className="form-check-input"
            name="role"
            value="ARTIST"
            checked={credentials.role === "ARTIST"}
            onChange={handleRoleChange}
          />
          Artist
        </label>
        <br/>
        <label>
          <input
            type="checkbox"
            className="form-check-input"
            name="role"
            value="ADMIN"
            checked={credentials.role === "ADMIN"}
            onChange={handleRoleChange}
          />
          Admin
        </label>
      </div>

      <button className="btn btn-primary float-end" onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;