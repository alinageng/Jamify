import * as dao from "./dao.js";

function PostsRoutes(app) {
  const getAllPosts = async (req, res) => {
    const {username, password} = req.body;
    const allPosts = await dao.findAllPosts();
    res.json(allPosts)
  }

  const insertNewPost = async (req, res) => {
    const {newPost} = req.body;
    const status = await dao.createNewPost(newPost);
    console.log(allPosts);
    res.json(status)

  }


  app.get("/api/posts", getAllPosts)
  app.post("/api/posts", insertNewPost)
}

export default PostsRoutes;