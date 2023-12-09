import SearchForMusic from "./searchForMusic";
import {getAllPosts, submitNewPost} from "../home/client";
import {useNavigate} from "react-router";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import {getSearchResults} from "../utils/spotify-service";
import {Link} from "react-router-dom";

function Search() {
  const [newPost, setNewPost] = useState();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const { accessToken } = useSelector((state) => state.accessToken);
  const callSearchSpotify = async () => {
    try {
      const response = await getSearchResults(searchTerm, accessToken);
      setResults(response);
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  const updateDescription = (event) => {
    setNewPost({ ... newPost, description: event.target.value});
  }

  const runSubmitNewPost = async () => {
    try {
      const response = await submitNewPost(newPost);
      navigate("/home");
    } catch (error) {
      console.error("Error Posting", error); //TODO display this error like we do in signin
    }
  };

  const tagThisItem = async ({createdBy, spotifyId, spotifyLink, releaseDate, imageLink, taggedItemType}) => {
    setNewPost( { ...newPost, createdBy: createdBy, spotifyId: spotifyId, spotifyLink: spotifyLink, releaseDate: releaseDate, imageLink: imageLink, taggedItemType: taggedItemType});
    // console.log("tagged a new item");
    // console.log(newPost);
    // console.log("CreatedBY " + createdBy);
    // console.log("spotify id " + spotifyId);
    // console.log("spotify link " + spotifyLink);
  }

  return (
    <div className="container">
      <h1>New Post</h1>
      <div className="form-group">
        <label htmlFor="Description">Write Description</label>
        <textarea className="form-control" id="Description" rows="3" onChange={updateDescription}></textarea>
      </div>
      <h2>Search For Music To Tag</h2>
      <div className="container">
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary" onClick={callSearchSpotify}>
          Search Spotify
        </button>
        <h3>Results</h3>
        {/*{JSON.stringify(results)}*/}
        {results &&
          results.albums &&
          results.albums.items &&
          results.albums.items.length > 0 &&
          <ul className="list-group">
            {results.albums.items.map((art) => (
              <li className="list-group-item" key={art.id}>
                <Link to={`/details?album_id=${art.id}`}>
                  <img src={art.images[2].url} alt={art.name} />
                  <h2>{art.name}</h2>
                </Link>
                <button
                  className="btn btn-primary float-end"
                  type="button"
                  onClick={() => tagThisItem({
                    createdBy: art.artists[0].name,
                    spotifyId: art.id,
                    spotifyLink: art.href,
                    releaseDate: art.release_date,
                    imageLink: art.images[2].url,
                    taggedItemType: "Album"
                  })}
                >
                  Tag
                </button>
              </li>
            ))}
          </ul>
          }
      </div>
      <button className="btn btn-primary float-end" type="submit" onClick={runSubmitNewPost}>Post</button>
    </div>
    )
}

export default Search;