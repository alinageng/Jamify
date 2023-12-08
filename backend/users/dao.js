import model from "./model.js";

export const findUserByCredentials = (username, password) =>
  model.findOne( {username, password});
