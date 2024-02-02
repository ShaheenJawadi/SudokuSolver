
import { AppDispatch} from "@/app/store";
import { setCursor } from "@/app/store/sudoku";
import { useDispatch } from "react-redux";
 
type Props ={
    row:number ,
    column:number, 
    digit : number ,
}

const Cell =(props : Props )=>{
    const { column, row, digit }= props ;

    const dispatch = useDispatch<AppDispatch>()
 
   
    const handelClick =()=>{
         dispatch(setCursor({x:column , y:row}))
    }
    return (
        <div className="cell" onClick={()=>handelClick()}>
            { digit!=0 && digit}
        </div>
    )
}

export default Cell ;