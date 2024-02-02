import { AppDispatch } from "@/app/store";
import { putDigit, moveCursor } from "@/app/store/sudoku";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const NumSelector =()=>{

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        const handleKeyDown = (event: any) => {
            const keyCode = event.keyCode ;
            if ((event.key >= '1' && event.key <= '9')) {
                handelClick(event.key as number);
            }
            else if (keyCode == 8) {
                handelClick(0);
            } 
            else if (keyCode >= 37 && keyCode<=40) {
                if (keyCode==37){
                    dispatch(moveCursor('left'))
                
                }
                else if (keyCode == 38) {
                    dispatch(moveCursor('up'))
                }
                else if (keyCode == 39) {
                    dispatch(moveCursor('right'))
                }
                else if (keyCode == 40) {
                    dispatch(moveCursor('down'))

                }
            } 
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);


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