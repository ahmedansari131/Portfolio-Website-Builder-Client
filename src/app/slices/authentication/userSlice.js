import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, actions) => {
      state.isLoggedIn = actions.payload.isLoggedIn;
    },
  },
});

export default userSlice.reducer;
export const { getUser } = userSlice.actions;