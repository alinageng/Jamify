import {Link} from "react-router-dom";
import React from "react";

function Track({track}) {
  return (
    <div>
      <Link to={`/details?track_id=${track.id}`}>
        <div className="row">
          <div className="col-2 d-flex justify-content-end pr-0">
            <img src={track.album.images[2].url} alt={track.name}  />
          </div>
          <div className="col-10 pl-3">
            <div className="taggedItemTitle">{track.name} ({new Date(track.album.release_date).getFullYear()})</div>
            <div className="taggedItemDetails">By {track.album.artists[0].name}</div>
            <div className="taggedItemDetails">On {track.album.name}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default Track;