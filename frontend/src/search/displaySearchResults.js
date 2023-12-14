import React, { useState} from "react";
import { getSearchResults} from "../utils/spotify-service";
import {useDispatch, useSelector} from "react-redux";
import DisplayAlbumResults from "./displayAlbumResults";
import {setResults, setSearchTerm} from "./taggedItemReducer";
import DisplayTrackResults from "./displayTrackResults";
import {useNavigate} from "react-router";

function DisplaySearchResults() {

  const [itemType, setItemType] = useState(null); // "Album", "Playlist", "Track"
  const { accessToken } = useSelector((state) => state.accessToken);
  const { results, searchTerm } = useSelector((state) => state.taggedItem);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const callSearchSpotify = async () => {
    try {
      const response= await getSearchResults(searchTerm, accessToken);
      dispatch(setResults(response));
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  const handleSetSearchTerm = (event) => {
    const {value} = event.target;
    dispatch(setSearchTerm(value));
  }


  return (
    <div className="container mt-4">
      <h2>Search For Music To Tag</h2>
      <hr></hr>
      <form className="form-inline mb-4">
        <div className="row">
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSetSearchTerm}
            />
          </div>
          <div className="col">
            <button className="btn btn-secondary" onClick={callSearchSpotify}>
              Search
            </button>
          </div>
        </div>
      </form>
      <h3>Results</h3>
      <hr></hr>
      {results && results.albums && (
        <DisplayAlbumResults albums={results.albums} />
      )}
      {results && results.tracks && (
        <DisplayTrackResults tracks={results.tracks} />
      )}
    </div>
  );
}

export default DisplaySearchResults;
