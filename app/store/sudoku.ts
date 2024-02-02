
import {createSlice } from "@reduxjs/toolkit"; 
import { SudokuBoardTpe, CursorPositionType } from "../types";
import {  canPlaceNumber, solvePuzzle } from "../services/solver";
 


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
  duplication:boolean, 
  solved : boolean, 
  timeTaken : string|null ,
};
const initialState: InitialStateType = {
  cursorPosition: { x: -1, y: -1 },
  board: emptyBoard,
  duplication: false,
  solved: false,
  timeTaken:null,
};

export const appSudokuSlice = createSlice({
  name: "appSudoku",
  initialState,
  reducers: {
    putDigit: (state, action) => {
      if(state.solved){
        return
      }
      const { x, y } = state.cursorPosition;
      const num =action.payload;

      if (checkCursor(x, y) && state.board[y][x]!==num) {
        if ( num==0 ||canPlaceNumber(state.board, y, x, num)) {
          state.board[y][x] = num;
        } else {
          state.duplication=true ;
        }
 
      }
    },
    setCursor: (state, action) => {
      const { x, y } = action.payload;
      if (state.cursorPosition.x == x && state.cursorPosition.y == y) {
        state.cursorPosition = { x: -1, y: -1 };
      } else state.cursorPosition = { x, y };
    },
    moveCursor: (state, action) => {
      const { x, y } = state.cursorPosition;
      let newPos = { x: 0, y: 0 };
      if (x == -1 || y == -1) {
        newPos = { x: 0, y: 0 };
      } else {
        if (action.payload == "left") {
          if (x > 0) {
            newPos = { x: x - 1, y: y };
          } else {
            newPos = { x: 8, y: y };
          }
        } else if (action.payload == "right") {
          if (x < 8) {
            newPos = { x: x + 1, y: y };
          } else {
            newPos = { x: 0, y: y };
          }
        } else if (action.payload == "up") {
          if (y > 0) {
            newPos = { x: x, y: y - 1 };
          } else {
            newPos = { x: x, y: 8 };
          }
        } else if (action.payload == "down") {
          if (y < 8) {
            newPos = { x: x, y: y + 1 };
          } else {
            newPos = { x: x, y: 0 };
          }
        }
      }

      state.cursorPosition = newPos;
    },
    solve: (state) => { 
      const startTime = performance.now();
      const solver = solvePuzzle(state.board);
      const endTime = performance.now();
   
      
      if (solver) {
        state.timeTaken =(endTime - startTime).toFixed(3);
        state.solved=true
      } else {
       alert("Unable to solve the Sudoku puzzle");
      }
    },
    reset: (state) => {
      return initialState
    },
    duplicationState: (state) => {
      state.duplication = false;
    },
  },
});

const checkCursor = (x:number , y:number) => {
  if (x == -1 && y == -1) return false;
  return true;
};
export const { putDigit, setCursor, moveCursor, solve, reset, duplicationState } =
  appSudokuSlice.actions;
export default appSudokuSlice.reducer;
