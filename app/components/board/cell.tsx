


type Props ={
    r:number ,
    c:number
}

const Cell =(props : Props )=>{
    const {c ,r}= props ;
    return (
        < >
            [{r},{c}]
        </ >
    )
}

export default Cell ;