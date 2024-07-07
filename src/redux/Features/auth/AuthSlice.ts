import { createSlice } from "@reduxjs/toolkit";
type TAuth = {
  user: null | object;
  token: null | string;
};
const initialState: TAuth = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.token = token;
      state.user = user;
    },
    logOut: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
