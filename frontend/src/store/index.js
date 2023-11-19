import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../login/loginReducer";

const store = configureStore({
  reducer: {
    loginReducer,
  }
});


export default store;