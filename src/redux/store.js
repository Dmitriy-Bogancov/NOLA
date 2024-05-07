import authSlice from "./auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import addPostSlice from "./addPostLink/addPostSlice";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};


export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authSlice),
    addLink: addPostSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
