import { configureStore } from "@reduxjs/toolkit";
import todoaReducer from './todoSlice'
export const store = configureStore({
  reducer: {
      todos:todoaReducer
  },
});
