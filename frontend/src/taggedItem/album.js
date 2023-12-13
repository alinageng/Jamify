import {Link} from "react-router-dom";

function Album({album}) {
  const parts = album.spotifyLink.split('/');
  const albumId = parts[parts.length - 1];
  return (
    <div className="border rounded p-3">
      <Link to={`/details?album_id=${albumId}`}>
        <div className="row">
          <div className="col-2 d-flex justify-content-end pr-0">
            <img src={album.imageLink}/>
          </div>
          <div className="col-10 pl-3">
            <div className="taggedItemTitle">{album.title} ({new Date(album.releaseDate).getFullYear()})</div>
            <div className="taggedItemDetails">By {album.createdBy}</div>
            <div className="taggedItemDetails">Album</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Album;