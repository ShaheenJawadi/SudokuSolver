import { AppDispatch } from "@/app/store";
import {putDigit } from "@/app/store/sudoku";
import { useDispatch, } from "react-redux";


const NumSelector =()=>{

    const dispatch = useDispatch<AppDispatch>()
    const handelClick = (num :number) => {
       
        dispatch(putDigit(num))
    }

    return (
        <div className="numSelector">
 
            {
                [...Array(9)].map((_ , index)=>{

                    return(
                        <div className="singleNum" onClick={() => handelClick(index + 1)} key={index}>{index+1}</div>
                    )
                })
            }
          
        </div>
    )

}


export default NumSelector ;