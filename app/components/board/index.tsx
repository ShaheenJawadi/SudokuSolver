import Cell from "./cell";



const Board =()=>{

    return (
        <div className="board">
            {[...Array(9)].map((_, rIndex)=>{
                
                return(
                    <div key={rIndex}>
                    {[...Array(9)].map((_, cIndex) => {
                        return <Cell key={cIndex} r={rIndex} c={cIndex} />
                    })}
                    </div>
            )})}
            
        </div>
    )
}

export default Board;