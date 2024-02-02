


type Props ={
    row:number ,
    column:number, 
    digit : number ,
}

const Cell =(props : Props )=>{
    const { column, row, digit }= props ;
    return (
        <div className="cell">
            { digit!=0 && digit}
        </div>
    )
}

export default Cell ;