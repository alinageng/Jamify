import { createSlice } from "@reduxjs/toolkit";

/**
 * Reducer to keep track of if a user is logged in or not
 */
const initialState = {
  isLoggedIn: true,
  userId: null,
  userType: null,
}

/**
 * Login and set userId
 * logout and set userId to null
 */
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userId = action.payload
      // look up what type of user just logged in: user or artist?
    },
    logout: (state, action) => {
      state.isLoggedOut = false;
      state.userId = null
    }
  }
});


export const {login, logout} = loginSlice.actions;
export default loginSlice.reducer;

