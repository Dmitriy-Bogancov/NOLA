import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  logOutThunk,
  refreshUserThunk,
  registerThunk,
} from "./authThunk";

const initialState = {
  user: {},
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  // reducers: {
  //   logoutAction: () => initialState,
  // },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.token = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.token = action.payload.token;
    });
    builder.addCase(refreshUserThunk.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUserThunk.fulfilled, (state, action) => {
      state.token = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(logOutThunk.fulfilled, (state, action) => {
      state.user = {};
      state.token = null;
      state.refreshToken = null;
      (state.isLoggedIn = false), (state.isRefreshing = false);
    });
    builder.addCase(refreshUserThunk.rejected, (state) => {
      state.isRefreshing = false;
    });
  },
});

// export const { logoutAction } = authSlice.actions;
export default authSlice.reducer;
