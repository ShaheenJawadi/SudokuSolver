
import { solve, putDigit, reset } from "@/app/store/sudoku";
import { AppDispatch } from "@/app/store";
import { useDispatch } from "react-redux";

const ActionPanel = ()=>{


    const dispatch = useDispatch<AppDispatch>()

  


    return (
        <div className="actionPanel" >
            <button onClick={() => dispatch(solve())}>
                <div className="emoji" >🧩</div>
                <div className="title" >Solve !</div>
            </button>
            <button onClick={() => dispatch(putDigit(0))}>
                <div className="emoji" >🧹</div>
                <div className="title" >Erase</div>
            </button>
            <button onClick={() => dispatch(reset())}>
                <div className="emoji" >🔄</div>
                <div className="title" >Reset</div>
            </button>
       

           

        </div>
    )
}

export default ActionPanel;