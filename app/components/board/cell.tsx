
import { AppDispatch, RootState } from "@/app/store";
import { setCursor } from "@/app/store/sudoku";
import { useDispatch, useSelector } from "react-redux";
 
type Props ={
    row:number ,
    column:number, 
    digit : number ,
}

const Cell =(props : Props )=>{
    const { column, row, digit }= props ;

    const dispatch = useDispatch<AppDispatch>()
    const store = useSelector((state: RootState) => state.sudoku)

    const isCursor = (column == store.cursorPosition.x && row == store.cursorPosition.y ) ?"cursor" :""
   
    const handelClick =()=>{
         dispatch(setCursor({x:column , y:row}))
    }
    return (
        <div className={`cell ${isCursor}`} onClick={()=>handelClick()}>
            { digit!=0 && digit}
        </div>
    )
}

export default Cell ;