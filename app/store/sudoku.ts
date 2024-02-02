
import {createSlice } from "@reduxjs/toolkit"; 
type InitialStateType = {
  data: any;
 
};
const initialState: InitialStateType = {
  data: null,
 
};

export const appSudokuSlice = createSlice({
  name: "appSudoku",
  initialState,
  reducers: {
    putDigit: (state, action) => {

    }
  }
});

export const { putDigit } = appSudokuSlice.actions;
export default appSudokuSlice.reducer;
