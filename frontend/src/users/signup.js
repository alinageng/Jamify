import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
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
      await client.signup(credentials);
      navigate("/profile");
    } catch (err) {
        console.log(err)
    //   setError(err.response.data.message);
    }
  }
  const handleRoleChange = (e) => {
    setCredentials({
      ...credentials,
      role: e.target.value,
    });
  };
  return (
    <div>
      <h1>Sign Up</h1>
      {error && <div>{error}</div>}
      <input className="form-control"
        value={credentials.username}
        placeholder="username"
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />

      <input className="form-control"
        type="password"
        value={credentials.password}
        placeholder="password"
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />

        <input className="form-control"
        value={credentials.firstName}
        placeholder="first name"
        onChange={(e) => setCredentials({
          ...credentials,
          firstName: e.target.value })} />

        <input className="form-control"
        value={credentials.lastName}
        placeholder="last name"
        onChange={(e) => setCredentials({
          ...credentials,
          lastName: e.target.value })} />

        <input className="form-control"
        type="email"
        value={credentials.email}
        placeholder="email"
        onChange={(e) => setCredentials({
          ...credentials,
          email: e.target.value })} />

        <input className="form-control"
        value={credentials.spotify_username}
        placeholder="spotify username"
        onChange={(e) => setCredentials({
          ...credentials,
          spotify_username: e.target.value })} />

    <label>
        <input
          type="radio"
          name="role"
          value="USER"
          checked={credentials.role === "USER"}
          onChange={handleRoleChange}
        />
        User
      </label>

      <label>
        <input
          type="radio"
          name="role"
          value="ARTIST"
          checked={credentials.role === "ARTIST"}
          onChange={handleRoleChange}
        />
        Artist
      </label>

      <label>
        <input
          type="radio"
          name="role"
          value="ADMIN"
          checked={credentials.role === "ADMIN"}
          onChange={handleRoleChange}
        />
        Admin
      </label>

      <button className="btn btn-primary float-end" onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;