import {useLocation, useParams} from "react-router-dom";
import { getTrackDetails} from "../utils/spotify-service";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
function Details() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const albumId = searchParams.get('album_id');
  const [details, setDetails] = useState(null);
  const { accessToken } = useSelector((state) => state.accessToken);

  const callSearchSpotify = async () => {
    try {
      console.log("location: " + searchParams)
      console.log("album_id: " + albumId)
      const response = await getTrackDetails(albumId, accessToken);
      setDetails(response);
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  useEffect(() => {
    callSearchSpotify();
  }, []);

  return (
    <div className="container">
      <h1>
        Details
      </h1>
      {details &&
        <div>
          <h2>
            {details.name}
          </h2>
          <img src={details.images[1].url} />
          <h2>
            released: {details.release_date}
          </h2>
          <h2>
            artist: {details.artists[0].name}
          </h2>
        </div>
      }
      <button className="btn btn-primary" >
        Add To Post
      </button>
    </div>
  )

}

export default Details;