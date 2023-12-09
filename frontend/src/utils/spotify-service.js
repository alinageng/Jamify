import axios from "axios";

const SPOTIFY_API = "https://api.spotify.com/v1";

export const getUsersPlaylists = async (userId, accessToken) => {

  try {
    const response = await axios.get(`${SPOTIFY_API}/users/${userId}/playlists`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching playlists:', error);
    throw new Error('Failed to fetch playlists');
  }
};

export const getSearchResults = async (searchTerm, accessToken) => {
  try {
    const response = await axios.get(`${SPOTIFY_API}/search?q=${searchTerm}&type=album%2Ctrack`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw new Error('Failed to fetch search results');
  }
};

export const getTrackDetails = async (id, accessToken) => {
  try {
    const response = await axios.get(`${SPOTIFY_API}/albums/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching details:', error);
    throw new Error('Failed to fetch details for a track');
  }
};
