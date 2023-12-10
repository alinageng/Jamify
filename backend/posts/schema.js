import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    description: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    },
    tagged: {
      taggedItemType: {
        type: String,
        enum: ['Playlist', 'Track', 'Album']
      },
      title: String,
      releaseDate: Date,
      spotifyLink: String,
      createdBy: String, // Only for Playlist
      artist: String,    // Only for Track and Album
      image: String,
    },
  }, { versionKey: false }
)

export default schema;

