import * as client from "../users/client";
import { useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { setCurrentUser } from "../users/userReducer";

function EditProfile() {
    const navigate = useNavigate();

    const { currentUser } = useSelector((state) => state.user);
    const [userInfo, setUserInfo] = useState(JSON.parse(JSON.stringify(currentUser)));
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const backToProfile = async() => {
        navigate(`/profile/${currentUser._id}`);
    }
  
    const handleUpdateInfo = async() => {
      try {
        const response = await client.updateUserInfo(currentUser._id, userInfo);
        setError(null);
        dispatch(setCurrentUser(response));
      } catch (error) {
        setError(error);
      }
      alert("Succesfully updated profile!")
      navigate(`/profile/${currentUser._id}`);
    };
    return (
        <div className="container">
        <button className="btn btn-light float-end update-button" onClick={backToProfile}>
            Back To Profile
        </button>
        <h1>Edit Profile</h1>
        <hr></hr>

        {error && <div className="alert alert-danger">{error.message}</div>}
        <div className={"col-6"}>
          <form>
            <div className="form-group mt-2">
              <label htmlFor="firstNameInput">First name</label>
              <input type="text" className="form-control" id="firstNameInput" value={userInfo.firstName}
              onChange={(e) => setUserInfo( {...userInfo, firstName: e.target.value})}/>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="lastNameInput">Last name</label>
              <input type="text" className="form-control" id="lastNameInput" value={userInfo.lastName}
                     onChange={(e) => setUserInfo( {...userInfo, lastname: e.target.value})}/>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="emailInput">Email address</label>
              <input type="email" className="form-control" id="emailInput" value={userInfo.email}
                     onChange={(e) => setUserInfo( {...userInfo, email: e.target.value})}/>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="passwordInput">Password</label>
              <input type="password" className="form-control" id="passwordInput"
                     onChange={(e) => setUserInfo( {...userInfo, password: e.target.value})}/>
            </div>
            <button type="submit" className="btn btn-light mt-4 update-button" onClick={handleUpdateInfo}>Update Info</button>
          </form>
        </div>
      </div>
        
    )
}

export default EditProfile;