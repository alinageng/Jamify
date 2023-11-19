import {useEffect, useState} from "react";
import {CLIENT_ID, CLIENT_SECRET} from "../utils/tokens";
import 'bootstrap/dist/css/bootstrap.css';

function HomePage() {
  const [accessToken, setAccessToken] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    };
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result=>result.json())
      .then(data=>setAccessToken(data.access_token))
      .catch(error => console.error("Error fetching access token:", error));
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
      const response = await fetch(`https://api.spotify.com/v1/users/${searchTerm}/playlists`, params);

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
        console.log(data);
      } else {
        console.error("Error fetching playlists:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching playlists:", error);
    }
  }

  return (
    <div className="container">
      <h1>final project</h1>
      <div className="">
        <input className="form-control" type="text" placeholder="Search"
               onChange={(e) => setSearchTerm(e.target.value)}/>
        <button className="btn btn-primary" onClick={search}>
          Go
        </button>
        <h3>Results</h3>
        <pre>
          {/*TODO display results*/}
          {/*{searchResults}*/}
        </pre>
      </div>
    </div>
  )
}
export default HomePage;