import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoggedIn: false,
  firstName: "",
  lastName: "",
  username: "",
  // id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      const temp = action.payload;
      state.currentUser = temp;
      state.firstName = temp.firstName;
      state.lastName = temp.lastName;
      state.username = temp.username;
      state.id = temp._id;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
