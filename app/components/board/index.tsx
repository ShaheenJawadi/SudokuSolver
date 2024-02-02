import { SudokuBoardTpe } from "@/app/types";
import Cell from "./cell";
import {RootState } from "@/app/store";
import { useSelector } from "react-redux";


const Board =()=>{

    const store = useSelector((state: RootState) => state.sudoku)
 

    return (
        <div className="board">
            {[...Array(9)].map((_, rIndex)=>{
                
                return(
                    [...Array(9)].map((_, cIndex) => {
                        return <Cell key={cIndex} digit={store.board[rIndex][cIndex]} row={rIndex} column={cIndex} />
                    })
                   
            )})} 
            
        </div>
    )
}

export default Board;