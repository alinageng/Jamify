import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../users/userReducer";
import accessTokenReducer from "../AccessTokenReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    accessToken: accessTokenReducer,
  }
});


export default store;