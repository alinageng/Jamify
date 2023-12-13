import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    description: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts',
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    authorUsername: {
        type: String,
        required: true
    },
  }, {versionKey: false}
)
export default schema;