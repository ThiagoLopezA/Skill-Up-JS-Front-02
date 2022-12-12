import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authSlice";
import logger from "redux-logger";

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
  },
});
 