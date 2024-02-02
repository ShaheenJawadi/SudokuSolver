import { SudokuBoardTpe } from "@/app/types";
import Cell from "./cell";



const Board =()=>{


    const test: SudokuBoardTpe = [
        [3, 7, 0, 0, 0, 2, 0, 9, 0],
        [0, 0, 0, 0, 0, 3, 0, 0, 4],
        [1, 0, 0, 0, 0, 7, 0, 0, 5],
        [0, 4, 3, 0, 0, 0, 0, 0, 0],
        [0, 0, 8, 0, 1, 0, 0, 4, 0],
        [9, 0, 0, 0, 6, 0, 0, 0, 8],
        [8, 0, 0, 0, 0, 1, 2, 0, 0],
        [7, 0, 0, 0, 5, 0, 0, 0, 9],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]

    return (
        <div className="board">
            {[...Array(9)].map((_, rIndex)=>{
                
                return(
                    [...Array(9)].map((_, cIndex) => {
                        return <Cell key={cIndex} digit={test[rIndex][cIndex]} row={rIndex+1} column={cIndex+1} />
                    })
                   
            )})} 
            
        </div>
    )
}

export default Board;