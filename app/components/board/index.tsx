import Cell from "./cell";



const Board =()=>{

    return (
        <div className="board">
            {[...Array(9)].map((_, rIndex)=>{
                
                return(
                    [...Array(9)].map((_, cIndex) => {
                        return <Cell key={cIndex} r={rIndex} c={cIndex} />
                    })
                   
            )})} 
            
        </div>
    )
}

export default Board;