
import {createSlice } from "@reduxjs/toolkit"; 
import { SudokuBoardTpe } from "../types";


  const emptyBoard: SudokuBoardTpe = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

type InitialStateType = {
  cursorPosition: {
    x: number;
    y: number;
  };
  board: SudokuBoardTpe;
};
const initialState: InitialStateType = {
  cursorPosition: { x: -1, y: -1 },
  board: emptyBoard,
};

export const appSudokuSlice = createSlice({
  name: "appSudoku",
  initialState,
  reducers: {
    putDigit: (state, action) => {

    },
    setCursor :(state , action )=>{
      const { x, y } = action.payload;
      if (state.cursorPosition.x == x && state.cursorPosition.y == y){
          state.cursorPosition = { x:-1, y:-1 };
      }
      else 
        state.cursorPosition = { x, y };
     
    }
  }
});

export const { putDigit, setCursor } = appSudokuSlice.actions;
export default appSudokuSlice.reducer;
