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

  const getUsersHomepagePosts = async (req, res) => {
    const userId = req.params.userId;
    const posts = await dao.findPostsForUsersHomepage(userId);
    res.json(posts);
  }

  const getPostsByTaggedItemId = async (req, res) => {
    const spotifyLink = req.params.spotifyLink;
    const posts = await dao.findPostsByTaggedItemId(spotifyLink);
    res.json(posts);
  }

  const deletePostById = async (req, res) => {
    const status = await dao.deletePostById(req.params.postId);
    res.json(status);
  }

  app.get("/api/posts", getAllPosts)
  app.get("/api/posts/by/:userId", getAllPostsWrittenByUser)
  app.get("/api/posts/homepage/:userId", getUsersHomepagePosts)
  app.post("/api/posts", insertNewPost)
  app.get("/api/posts/:postId", getPostById)
  app.get("/api/posts/tagged/:spotifyLink", getPostsByTaggedItemId)
  app.delete("/api/posts/:postId", deletePostById)
}

export default PostsRoutes;