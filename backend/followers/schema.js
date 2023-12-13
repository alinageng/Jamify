import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    followed: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    follower: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
  }, {versionKey: false}
)
export default schema;