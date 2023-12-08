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

  app.post("/api/users/signin", signin)

}

export default UserRoutes;