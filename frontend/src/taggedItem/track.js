import {Link} from "react-router-dom";
import "./taggedItem.css"

function Track({track}) {
  const parts = track.spotifyLink.split('/');
  const trackId = parts[parts.length - 1];
  return (
    <div className="border rounded p-3">
      <Link to={`/details?track_id=${trackId}`}>
        <div className="row">
          <div className="col-2 d-flex justify-content-end pr-0">
            <img src={track.imageLink}/>
          </div>
          <div className="col-10 pl-3">
            <div className="taggedItemTitle">{track.title} ({new Date(track.releaseDate).getFullYear()})</div>
            <div className="taggedItemDetails">By {track.createdBy}</div>
            <div className="taggedItemDetails">Track</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Track;