import * as dao from "./dao.js";

function UserRoutes(app) {
  const signin = async (req, res) => {
    const {username, password} = req.body;
    const currentUser = await dao.findUserByCredentials(username, password);
    req.session["currentUser"] = currentUser;
    if (!currentUser) {
      //TODO not send everything in current user like the password and _id
      res.status(403).send("Incorrect username or password");
    } else{
      res.json(currentUser)
    }
  }

  const account = (req, res) => {
    const currentUser = req.session["currentUser"];
    res.json(currentUser);
  };

  const signout = (req, res) => {
    req.session.destroy();
    res.json(200);
  };

  const getUserInfo = async (req, res) => {
    const userId = req.params.userId;
    const response = await dao.findUserById(userId);
    res.json(response);
  }

  const signup = async (req, res) => {
    const user = await dao.findUserByUsername(
      req.body.username);
    if (user) {
      res.status(400).json(
        { message: "Username already taken" });
      return;
    }
    const newUser = await dao.createUser(req.body);
    const currentUser = await dao.findUserByUsername(newUser.username);

    req.session["currentUser"] = currentUser;

    if (!currentUser) {
      //TODO not send everything in current user like the password and _id
      res.status(403).send("Incorrect username or password");
    } else{
      res.json(currentUser)
    }
  }

  app.get("/api/users/:userId", getUserInfo)
  app.post("/api/users/signin", signin)
  app.post("/api/users/account", account)
  app.post("/api/users/signout", signout)
  app.post("/api/users/signup", signup);
}

export default UserRoutes;