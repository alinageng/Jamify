import React, { useState, useEffect } from "react";
import * as client from "./client";
import { BsTrash3Fill} from "../../node_modules/react-icons/bs";
import {Link} from "react-router-dom";

function UserTable() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => { fetchUsers(); }, []);

  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>User List</h1>
      <hr></hr>
      <table className="table table table-striped table-hover " >
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              
              <td>
              <Link to={`/profile/${user._id}`}>
                {user.username}
                </Link>
                </td>
              
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.role}</td>
              <td> 
                <button className="btn btn-light me-2 update-button" onClick={() => deleteUser(user)}>
                  <BsTrash3Fill />
                </button></td>
                
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
export default UserTable;