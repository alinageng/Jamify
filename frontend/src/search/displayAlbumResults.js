import {useDispatch, useSelector} from "react-redux";
import {setTaggedItem} from "./taggedItemReducer";
import Album from "./Album";

function DisplayAlbumResults({ albums }) {
  const { taggedItem } = useSelector((state) => (state.taggedItem))
  const dispatch = useDispatch();

  const isTagged = (id) => {
    if (taggedItem) {
      return taggedItem.taggedItemType === "Album" && taggedItem.spotifyId === id;
    } else {
      return false;
    }
  }

  return (
    <div>
      <h2> Albums </h2>
    {albums && albums.items.length > 0 ?
      (
        <ul className="list-group">
          {albums.items.map((art) => (
            <li className={`list-group-item ${isTagged(art.id) ? 'active' : ''}`} key={art.id}>
              <Album album={art}/>
              <button
                className="btn btn-primary float-end"
                type="button"
                onClick={() => dispatch(setTaggedItem({
                  createdBy: art.artists[0].name,
                  spotifyId: art.id,
                  spotifyLink: art.href,
                  releaseDate: art.release_date,
                  imageLink: art.images[2].url,
                  taggedItemType: "Album",
                  title: art.name
                }))}
              >
                Tag
              </button>
            </li>
          ))}
        </ul>
      ) :
      <h2> no results </h2>
    }
    </div>
  );
}

export default DisplayAlbumResults;
