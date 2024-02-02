"use client"
 import Board from "./components/board";
import { Provider } from 'react-redux'
import { store } from "./store";
import NumSelector from "./components/controls/numSelector";
import ActionPanel from "./components/controls/actionPanel";

export default function Home() {
  return ( 
    <Provider store={store}>
      <main className="main">
      
        <div className="mainContainer">
            <Board/>
            <ActionPanel/>
        </div>
     
        <NumSelector/>
    
      </main>
    </Provider>
  );
}
