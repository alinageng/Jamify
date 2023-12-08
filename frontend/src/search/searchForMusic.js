import {useEffect, useState} from "react";
import {getAccessToken} from "../utils/getAccessToken";
import {CLIENT_ID, CLIENT_SECRET} from "../utils/tokens";
import {Link} from "react-router-dom";

function SearchForMusic() {
  const [accessToken, setAccessToken] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
//replace(/ /g, '+');
  useEffect(() => {
    getAccessToken(CLIENT_ID, CLIENT_SECRET).
    then((token) => setAccessToken(token));
  }, [])

  async function search() {
    if (!accessToken) {
      console.error("Access token not available");
      return;
    }

    const params = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    };
    try {
      console.log(accessToken);
      const response = await fetch(`https://api.spotify.com/v1/search?q=taylor+swift&type=album%2Cplaylist%2Ctrack`, params);

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.items);
        console.log(data);
      } else {
        console.error("Error fetching playlists:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching playlists:", error);
    }
  }

  useEffect(() => {
    search();
  }, [searchResults]);

  return (
    <div className="container">
        <input className="form-control" type="text" placeholder="Search"
               onChange={(e) => setSearchTerm(e.target.value)}/>
        <button className="btn btn-primary" onClick={search}>
          Go
        </button>
        <h3>Results</h3>
        {JSON.stringify(searchResults)}
        {/*<ul className="list-group">*/}
        {/*  {searchResults && searchResults.map((playlist) => (*/}
        {/*    <Link to='/details'>*/}
        {/*      <li className="list-group-item" key={playlist.id}>*/}
        {/*        name: {playlist.name} description: {playlist.description}*/}
        {/*      </li>*/}
        {/*    </Link>*/}

        {/*  ))}*/}
        {/*</ul>*/}
    </div>
  )
}
export default SearchForMusic;