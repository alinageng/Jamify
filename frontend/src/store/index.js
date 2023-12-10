import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../users/userReducer";
import accessTokenReducer from "../AccessTokenReducer";
import taggedItemReducer from "../search/taggedItemReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    accessToken: accessTokenReducer,
    taggedItem: taggedItemReducer,
  }
});


export default store;