import * as dao from "./dao.js";

function CommentsRoutes(app) {
  const getPostsComments = async (req, res) => {
    const postId = req.params.postId;
    const comments = await dao.findCommentsByPostId(postId);
    res.json(comments)
  }

  const insertNewComment = async (req, res) => {
    const newComment = req.body;
    const status = await dao.createNewComment(newComment);
    res.json(200)
  }

  app.get("/api/posts/:postId/comments", getPostsComments)
  app.post("/api/comments", insertNewComment)
}

export default CommentsRoutes;