import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as client from "../users/client";
import {getFollowers} from "../users/client";
import DisplayUserFollow from "./DisplayUserFollow"

function Follow() {
  const {userId, followType} = useParams();
  const [follow, setFollow] = useState();

  const fetchFollow = async() => {
    try {
      if (followType === "followers") {
        const follow = await client.getFollowers(userId);
        setFollow(follow);
      }
      else if (followType === "following") {
        const follow = await client.getFollowing(userId);
        setFollow(follow);
      }
    } catch (error) {}
  }


  useEffect(() => {
    fetchFollow()
  })

  return (
    <div>
      {/* <h1>{followType} for ${userId}</h1> */}
      {followType === 'followers' ? (
            <h1>Followers:</h1>
          ) : (
            <h1>Following:</h1>
          )}
      {/* <DisplayUserFollow userId={userId}/> */}
      {follow && <DisplayUserFollow follows={follow} followType={followType}/>}
      {/* {follow && JSON.stringify(follow)} */}
    </div>
  )

}

export default Follow;