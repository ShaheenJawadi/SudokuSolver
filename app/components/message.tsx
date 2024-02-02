 
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/app/store";
import { duplicationState } from "@/app/store/sudoku";
import { useDispatch, useSelector } from "react-redux";

const MessageDisplay =()=>{

    const dispatch = useDispatch<AppDispatch>()
    const store = useSelector((state: RootState) => state.sudoku)
    useEffect(()=>{
        if (store.duplication){
            setTimeout(() => {
                dispatch(duplicationState())
            }, 1200);
            
        }

    },[ store.duplication])

    if (store.duplication)
    return (
        <div className="duplicationMessage" >
            This number already exists in the same row, column, or block.
        </div>
    )
}

export default MessageDisplay ;