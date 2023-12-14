import {useLocation, useParams} from "react-router-dom";
import { getTrackDetails} from "../utils/spotify-service";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import DisplayTaggedPosts from "./DisplayTaggedPosts";
function Details() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const albumId = searchParams.get('album_id');
  const trackId = searchParams.get('track_id');
  const playlistId = searchParams.get('playlist_id');
  const [details, setDetails] = useState(null);
  const [itemType, setItemType] = useState();
  const { accessToken } = useSelector((state) => state.accessToken);
  const trackDelimiter = 'tracks/';
  const albumDelimiter = 'albums/';

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
  }, []);

  return (
    <div className="container">

      {details && itemType === "Album" &&
        <div>
          <h1>
            Album Details
          </h1>
          <h2>
            {details.name}
          </h2>
          <img src={details.images[1].url} />
          <h2>
            Released: {details.release_date}
          </h2>
          <h2>
            Artist: {details.artists[0].name}
          </h2>
          <div>

      <DisplayTaggedPosts spotifyLink={albumId}/>
      </div>
        </div>
      }
      {details && itemType === "Track" &&
        <div>
          <h1>
            Track Details
          </h1>
          <h2>
            {details.name}
          </h2>
          <img src={details.album.images[1].url} />
          <h2>
            Released: {details.album.release_date}
          </h2>
          <h2>
            Artist: {details.album.artists[0].name}
          </h2>
          <div>
      <DisplayTaggedPosts spotifyLink={trackId}/>
      </div>
        </div>
      }
    </div>
  )

}

export default Details;