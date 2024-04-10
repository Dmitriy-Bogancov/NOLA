import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { instance, token } from "../../services/axios";
import { getAccountApi } from "../../services/https/https";

export const loginThunk = createAsyncThunk(
  "login",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/Account/login", user);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.title ||
          error?.response?.statusText ||
          error.message
      );
    }
  }
);

export const registerThunk = createAsyncThunk(
  "register",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/Account/register", user);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.errors?.Password ||
          error?.response?.data?.errors?.email ||
          error?.response?.statusText ||
          error.message
      );
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  "refresh",
  async (_, thunkAPI) => {
    const stateToken = thunkAPI.getState().auth.token;

    if (!stateToken) {
      return isRejectedWithValue("No valid token");
    }
    token.set(stateToken);

    try {
      const { data } = await getAccountApi();
      return data;
    } catch (error) {
      return isRejectedWithValue(error.message);
    }
  }
);
