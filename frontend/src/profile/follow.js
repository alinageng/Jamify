import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as client from "../users/client";
import {getFollowers} from "../users/client";
import DisplayUserFollow from "./DisplayUserFollow"
import { useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


function Follow() {
  const {userId, followType} = useParams();
  const [follow, setFollow] = useState();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

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

  const goProfile = async() => {
    navigate(`/profile/${currentUser._id}`);
    }


  useEffect(() => {
    fetchFollow()
  })

  return (
    <div className={"container"}>
          <button className="btn btn-light float-end" onClick={goProfile}>
            Back To Profile
          </button>
      {/* <h1>{followType} for ${userId}</h1> */}
      {followType === 'followers' ? (
            <h1>Followers</h1>
          ) : (
            <h1>Following</h1>
          )}

      {/* <DisplayUserFollow userId={userId}/> */}
      <hr>
      </hr>
      {follow && <DisplayUserFollow follows={follow} followType={followType}/>}
      {/* {follow && JSON.stringify(follow)} */}
    </div>
  )

}

export default Follow;