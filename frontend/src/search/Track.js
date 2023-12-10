import {Link} from "react-router-dom";
import React from "react";

function Track({track}) {
  return (
    <div>
      <Link to={`/details?track_id=${track.id}`}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={track.album.images[2].url} alt={track.album.name}  />
          <h2>{track.name}</h2>
        </div>
      </Link>
    </div>
  )
}
export default Track;