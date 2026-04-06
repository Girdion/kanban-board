import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import boardReducer from "./board/boardSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    board: boardReducer,
  },
});
