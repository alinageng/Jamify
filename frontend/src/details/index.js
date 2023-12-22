import {useLocation} from "react-router-dom";
import { getTrackDetails} from "../utils/spotify-service";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import DisplayTaggedPosts from "./DisplayTaggedPosts";
import { useNavigate} from "react-router-dom";
import "./index.css";

function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const albumId = searchParams.get('album_id');
  const trackId = searchParams.get('track_id');
  const playlistId = searchParams.get('playlist_id');
  const [details, setDetails] = useState(null);
  const [itemType, setItemType] = useState();
  const { accessToken } = useSelector((state) => state.accessToken);


  const backToSearch = async() => {
    navigate("/search")
  }

  const backToHome = async() => {
    navigate("/home")
  }

  const callSearchSpotify = async () => {
    try {
      if (albumId) {
        const response = await getTrackDetails(albumId, accessToken, "albums");
        setDetails(response);
        setItemType("Album");
      }
      else if (trackId) {
        const response = await getTrackDetails(trackId, accessToken, "tracks");
        setDetails(response);
        setItemType("Track");
      }
      else if (playlistId) {
        const response = await getTrackDetails(playlistId, accessToken, "playlists");
        setDetails(response);
        setItemType("Playlist");
      }
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  useEffect(() => {
    callSearchSpotify();
  });

  return (
    <div className="container">

      {details && itemType === "Album" &&
        <div >
          <button className="btn btn-light float-end" onClick={backToSearch}>
            Back To Search
          </button>
          <button className="btn btn-light float-end" onClick={backToHome}>
            Back To Home
          </button>
          <h1>
            Album Details
          </h1>
          <hr></hr>

          <div id="details">
          <h2>
            {details.name}
          </h2>
          <img src={details.images[1].url} alt="Album details" />
          <h3>
            Released: {details.release_date}
          </h3>
          <h3>
            Artist: {details.artists[0].name}
          </h3>
          </div>

        <div>

      <DisplayTaggedPosts spotifyLink={albumId}/>
      </div>
        </div>
      }
      {details && itemType === "Track" &&
        <div>
          <button className="btn btn-light float-end" onClick={backToSearch}>
            Back To Search
          </button>
          <button className="btn btn-light float-end" onClick={backToHome}>
            Back To Home
          </button>
          <h1>
            Track Details
          </h1>
          <hr></hr>

          <div id="details">

          <h2>
            {details.name}
          </h2>
          <img src={details.album.images[1].url} alt="Album Cover" />
          <h3>
            Released: {details.album.release_date}
          </h3>
          <h3>
            Artist: {details.album.artists[0].name}
          </h3>
          </div>
          <div>
      <DisplayTaggedPosts spotifyLink={trackId}/>
      </div>
        </div>
      }
    </div>
  )

}

export default Details;