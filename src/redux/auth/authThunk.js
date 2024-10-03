import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { instance, token } from "../../services/axios";
import { postlogOut, postRefreshToken } from "../../services/https/https";
import { ToastError } from "../../services/ToastError/ToastError";

// 1234567A$z  inna2@gmail.com
// inna@ukr.net     // 1234567A@a
export const loginThunk = createAsyncThunk(
  "login",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/auth/login", user);    
      token.set(data.accessToken);
      return data;
    } catch (error) {
      if (error?.response?.status === 401) {
        return rejectWithValue("The password or email was entered incorrectly");
      } else {
        return rejectWithValue(error?.response?.statusText || error.message || "Try again later.");
      }
    }
  }
);
export const registerThunk = createAsyncThunk(
  "register",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/accounts/register", user);
      token.set(data?.accessToken);
      return data;
    } catch (error) {     
      return rejectWithValue(
        error?.response?.data[0]?.description ||
          error?.response?.data?.errors?.Password ||
          error?.response?.data?.errors?.email ||
          error?.response?.statusText ||
        error.message ||
        "Try again later."
      );
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  "refresh",
  async (_, thunkAPI) => {
    const stateToken = thunkAPI.getState().auth.token;
    const refreshToken = thunkAPI.getState().auth.refreshToken;

    if (!stateToken) {
      return isRejectedWithValue("No valid token");
    }
    token.set(stateToken);

    try {
      // const { data } = await getAccountApi();
      const { data } = await postRefreshToken({
        accessToken: stateToken,
        refreshToken: refreshToken,
      });
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return isRejectedWithValue("No valid token");
    }
  }
);

export const logOutThunk = createAsyncThunk("logOut", async (_, thunkAPI) => {
  try {
    await postlogOut();
    token.unset();
  } catch (error) {
    return isRejectedWithValue(error.message || "Try again later.");
  }
});
