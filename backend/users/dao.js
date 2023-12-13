import model from "./model.js";

export const findUserByCredentials = (username, password) =>
  model.findOne( {username, password});

export const createUser = (user) => model.create(user);

export const findUserByUsername = (username) => model.findOne({ username: username });
