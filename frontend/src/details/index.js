import { useParams } from "react-router-dom";
import { getTrackDetails} from "../utils/spotify-service";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
function Details() {
  const {id} = useParams();
  const [details, setDetails] = useState();
  const { accessToken } = useSelector((state) => state.accessToken);


  const callSearchSpotify = async () => {
    try {
      const response = await getTrackDetails(id, accessToken);
      setDetails(response);
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };
  //
  // https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl
  // https://api.spotify.com/v1/tracks/64LU4c1nfjz1t4VnGhagcg
  useEffect(() => {
    callSearchSpotify();
  }, []);

  return (
    <div className="container">
      <h1>
        Details
      </h1>
      {JSON.stringify(details)}
      <h2>
        {details.album.name}
      </h2>
      <img src={details.album.images[0].url} />
      <h2>
      released: {details.album.release_date}
      </h2>
      <h2>
        artist: {details.artist.name}
      </h2>
    </div>

  )

}

export default Details;