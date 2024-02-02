
import {createSlice } from "@reduxjs/toolkit"; 
type InitialStateType = {
  cursorPosition:{
    x:number , y:number
  };
 
};
const initialState: InitialStateType = {
  cursorPosition: {x:-1 , y:-1},
 
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
