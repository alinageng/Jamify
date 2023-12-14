import * as client from "../users/client";
import { useNavigate} from "react-router-dom";
import React, {useState} from "react";


function EditProfile() {
    const navigate = useNavigate();

    const {account, setAccount} = useState();

    const editProfile = async () => {
        // await client.updateUser(account);
        navigate("./profile");
        window.location.reload(false);
    };
    return (
        <div className="container">
            <h1>Edit Profile</h1>

            <button className="btn btn-primary" onClick={editProfile}>
                Save
            </button>
        </div>
    )
}

export default EditProfile;