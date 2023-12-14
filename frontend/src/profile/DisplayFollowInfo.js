import {useEffect, useState} from "react";
import * as client from "../users/client";
// import {getUserInfo} from "../users/client";

function DisplayFollowInfo({ userId }) {
    const [userInfo, setUserInfo] = useState();
  
    const fetchUserInfo = async () => {
      try {
        const user = await client.getUserInfo(userId);
        setUserInfo(user);
      } catch (error) {
        // Handle error
      }
    };
  
    useEffect(() => {
      fetchUserInfo();
    }, [userId]); // Add userId as a dependency to fetch when it changes
  
    return (
      <div>
        {userInfo && ( // Check if userInfo is available before accessing its properties
          <>
            <h6>
              {userInfo.firstName + " " + userInfo.lastName}
            </h6>
            <p>
              {userInfo.spotify_id !== undefined &&
              "Spotify Username: " + userInfo.spotify_id}
            </p>
          </>
        )}
      </div>
    );
  }
  
  export default DisplayFollowInfo;