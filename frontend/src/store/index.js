import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../login/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
  }
});


export default store;