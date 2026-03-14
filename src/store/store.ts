import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/userSlice";

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
