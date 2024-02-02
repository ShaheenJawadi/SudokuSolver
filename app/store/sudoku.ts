
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
     
    },
    moveCursor:(state, action)=>{
       const {x,y}=state.cursorPosition;
       let newPos = { x: 0, y: 0 };
      if(x==-1 || y==-1){
        newPos = { x: 0, y: 0 };
        
      }
      else {
        if(action.payload=="left"){
          if(x>0){
            newPos={x:x-1 ,y:y}
          }
          else {
            newPos = { x:8, y: y };
          }
        }
        else if (action.payload == "right") {
          if (x <8) {
            newPos = { x: x +1, y: y };
          } else {
            newPos = { x: 0, y: y };
          }
        }
        else if (action.payload == "up") {
          if (y >0) {
            newPos = { x: x , y: y-1 };
          } else {
            newPos = { x: x, y: 8 };
          }
        }
       else  if (action.payload == "down") {

        if (y <8 ) {
          newPos = { x: x, y: y + 1 };
        } else {
          newPos = { x: x, y: 0 };
        }
        }
      }

       state.cursorPosition = newPos;
    }
  }
});

const checkCursor = (x:number , y:number) => {
  if (x == -1 && y == -1) return false;
  return true;
};
export const { putDigit, setCursor, moveCursor } = appSudokuSlice.actions;
export default appSudokuSlice.reducer;
