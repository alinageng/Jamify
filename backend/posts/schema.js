import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    authorUsername: {
      type: String,
      required: true
    },
    datePosted: {
      type: Date,
      default: Date.now,
    },
    tagged: {
      taggedItemType: {
        type: String,
        enum: ['Playlist', 'Track', 'Album'],
        required: true
      },
      title: {
        type: String,
        required: true
      },
      releaseDate:{
        type: Date,
        required: true
      },
      spotifyLink: {
        type: String,
        required: true
      },
      imageLink: {
        type: String,
        required: true
      },
      createdBy: {
        type: String,
        required: true
      },
    },
  }, { versionKey: false }
)

export default schema;

