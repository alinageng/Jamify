import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {setTaggedItem} from "./taggedItemReducer";
import Track from "./Track";
import {useLocation} from "react-router-dom";

function DisplayTrackResults({ tracks }) {
  const { taggedItem } = useSelector((state) => (state.taggedItem))
  const dispatch = useDispatch();
  const showTagButton = useLocation().pathname === '/search';


  const isTagged = (id) => {
    if (taggedItem) {
      return taggedItem.taggedItemType === "Track" && taggedItem.spotifyId === id;
    } else {
      return false;
    }
  }

  return (
    <div>
      <h2> Tracks </h2>

      {tracks && tracks.items.length > 0 ?
        (
          <ul className="list-group">
            {tracks.items.map((art) => (
              <li className={`list-group-item ${isTagged(art.id) ? 'active' : ''}`} key={art.id}>
                <div className="row">
                  <div className="col-10">
                    <Track track={art}/>
                  </div>
                  <div className="col-2">
                    {showTagButton &&
                    <button
                      className="btn btn-secondary float-end"
                      type="button"
                      onClick={() => dispatch(setTaggedItem({
                        createdBy: art.artists[0].name,
                        spotifyId: art.id,
                        spotifyLink: art.href,
                        releaseDate: art.album.release_date,
                        imageLink: art.album.images[2].url,
                        taggedItemType: "Track",
                        title: art.name
                      }))}
                    >
                      Tag
                    </button>
                    }
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) :
        <h2> no results </h2>
      }
    </div>
  );
}

export default DisplayTrackResults;
