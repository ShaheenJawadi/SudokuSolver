"use client"
 import Board from "./components/board";
import { Provider } from 'react-redux'
import { store } from "./store";
import NumSelector from "./components/controls/numSelector";

export default function Home() {
  return ( 
    <Provider store={store}>
      <main className="main">
      
        <Board/>
        <NumSelector/>
    
      </main>
    </Provider>
  );
}
