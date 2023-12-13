import * as dao from "./dao.js";

function PostsRoutes(app) {
  const getAllPosts = async (req, res) => {
    const {username, password} = req.body;
    const allPosts = await dao.findAllPosts();
    res.json(allPosts)
  }

  const insertNewPost = async (req, res) => {
    const newPost = req.body;
    const status = await dao.createNewPost(newPost);
    res.json(200)
  }

  const getPostById = async (req, res) => {
    const postId = req.params.postId;
    const post = await dao.findPostByPostId(postId);
    res.json(post)
  }

  const getAllPostsWrittenByUser = async (req, res) => {
    const userId = req.params.userId;
    const posts = await dao.findPostsByUserId(userId);
    res.json(posts);
  }

  app.get("/api/posts", getAllPosts)
  app.get("/api/posts/by/:userId", getAllPostsWrittenByUser)
  app.post("/api/posts", insertNewPost)
  app.get("/api/posts/:postId", getPostById)
}

export default PostsRoutes;