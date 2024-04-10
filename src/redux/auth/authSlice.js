import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, refreshUserThunk, registerThunk } from "./authThunk";

const initialState = {
  user: {},
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutAction: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true
      state.token = action.payload.token;
    });
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true
      state.token = action.payload.token;
    });
    builder.addCase(refreshUserThunk.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUserThunk.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isLoggedIn = true
      state.isRefreshing = false;
    });
      builder.addCase(refreshUserThunk.rejected, (state) => {
      state.isRefreshing = false;
    });
  },
});

export const { logoutAction } = authSlice.actions;
export default authSlice.reducer;
