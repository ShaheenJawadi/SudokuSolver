import { configureStore } from "@reduxjs/toolkit";
import sudoku from "./sudoku";

export const store = configureStore({
  reducer: { sudoku },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
