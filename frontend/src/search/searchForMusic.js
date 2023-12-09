import React, { useState } from "react";
import {getUsersPlaylists, getSearchResults} from "../utils/spotify-service";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function SearchForMusic() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const { accessToken } = useSelector((state) => state.accessToken);

  const callGetUsersPlaylists = async () => {
    try {
      const response = await getUsersPlaylists(searchTerm, accessToken);
      setResults(response);
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  const callSearchSpotify = async () => {
    try {
      const response = await getSearchResults(searchTerm, accessToken);
      setResults(response);
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  return (
    <div className="container">
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/*<button className="btn btn-primary" onClick={callGetUsersPlaylists}>*/}
      {/*  Get Users Playlists*/}
      {/*</button>*/}
      <button className="btn btn-primary" onClick={callSearchSpotify}>
        Search Spotify
      </button>
      <h3>Results</h3>
      {/*{JSON.stringify(results)}*/}
      {results &&
        results.albums &&
        results.albums.items &&
        results.albums.items.length > 0 &&
        results.albums.items.map((art) => (
          <div key={art.id}>
            <Link to={`/details?album_id=${art.id}`}>
              <img src={art.images[1].url} />
              <h2>{art.name}</h2>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default SearchForMusic;
