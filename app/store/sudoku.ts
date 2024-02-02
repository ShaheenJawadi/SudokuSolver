
import {createSlice } from "@reduxjs/toolkit"; 
import { SudokuBoardTpe, CursorPositionType } from "../types";


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
  cursorPosition: CursorPositionType;
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
      const {x,y}=state.cursorPosition;
      if(checkCursor(x,y)){
        state.board[y][x]=action.payload
      }
      

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

const checkCursor = (x:number , y:number) => {
  if (x == -1 && y == -1) return false;
  return true;
};
export const { putDigit, setCursor } = appSudokuSlice.actions;
export default appSudokuSlice.reducer;
