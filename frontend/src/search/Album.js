import {Link} from "react-router-dom";
import React from "react";

function Album({album}) {
  return (
    <Link to={`/details?album_id=${album.id}`}>
      <div className="row">
        <div className="col-2 d-flex justify-content-end pr-0">
          <img src={album.images[2].url} alt={album.name}  />
        </div>
        <div className="col-10 pl-3">
          <div className="taggedItemTitle">{album.name} ({new Date(album.release_date).getFullYear()})</div>
          <div className="taggedItemDetails">By {album.artists[0].name}</div>
          <div className="taggedItemDetails">{album.total_tracks} tracks</div>
        </div>
      </div>
    </Link>
  )
}
export default Album