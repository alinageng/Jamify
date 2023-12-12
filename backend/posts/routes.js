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

  app.get("/api/posts", getAllPosts)
  app.post("/api/posts", insertNewPost)
  app.get("/api/posts/:postId", getPostById)
}

export default PostsRoutes;