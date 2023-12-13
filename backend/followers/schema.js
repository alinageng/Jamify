import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    followedId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    followedUsername: {
      type: String,
      required: true
    },
    followerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    followerUsername: {
      type: String,
      required: true
    },
  }, {versionKey: false}
)
export default schema;