import * as dao from "./dao.js";

function UserRoutes(app) {
  const signin = async (req, res) => {
    console.log("here")
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
    console.log("signout in route: ")
    // console.log("signout set null: " +currentUser)
    req.session.destroy();
    res.json(200);
  };


  app.post("/api/users/signin", signin)
  app.post("/api/users/account", account)
  app.post("/api/users/signout", signout)
}

export default UserRoutes;