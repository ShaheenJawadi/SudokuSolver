
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
