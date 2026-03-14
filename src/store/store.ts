import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/userSlice";
export type AppDispatch = typeof store.dispatch

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
