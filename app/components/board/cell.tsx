


type Props ={
    r:number ,
    c:number
}

const Cell =(props : Props )=>{
    const {c ,r}= props ;
    return (
        <div className="cell">
            [{r},{c}]
        </div>
    )
}

export default Cell ;