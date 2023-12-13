import Album from "./album";
import Track from "./track";

function TaggedItem({taggedItem}) {

  switch(taggedItem.taggedItemType) {
    case "Album":
      return <Album album={taggedItem}/>
    case "Track":
      return <Track track={taggedItem}/>
    default:
      return <h4>Invalid TaggedItem: {JSON.stringify(taggedItem)}</h4>
  }

}

export default TaggedItem;