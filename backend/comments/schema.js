import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    description: String,
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    },
    author: {
    type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    },
    authorUsername: String
  }, {versionKey: false}
)
export default schema;