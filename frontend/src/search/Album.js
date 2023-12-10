import {Link} from "react-router-dom";
import React from "react";

function Album({album}) {
  return (
    <Link to={`/details?album_id=${album.id}`}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={album.images[2].url} alt={album.name}  />
        <h2>{album.name}</h2>
      </div>
    </Link>
  )
}
export default Album