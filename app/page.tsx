"use client"
 import Board from "./components/board";
import { Provider } from 'react-redux'
import { store } from "./store";

export default function Home() {
  return ( 
    <Provider store={store}>
      <main className="main">
      
        <Board/>
    
      </main>
    </Provider>
  );
}
