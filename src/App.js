import './App.css';
import { useState } from 'react';
import App2 from './App2';


function App() {

  let [count, setCount] = useState(0)

  let [color, setColor] = useState("#035aa6")


  function add() {
    setCount(++count)
    if(count > 15){
      setColor("#ff5200");
    }
  }
  
  function substract() {
    setCount(--count)
    if(count <= 15){
      setColor("#035aa6");
    }
  }
    
  return (
    <div className='App'>
      <div className="main">
        <div className='circle' style={{background:color}}>
          <p>{count}&#8451;</p>
        </div>
        <div className="buttons">
          <button onClick={add}>+</button>
          <button onClick={substract}>-</button>
        </div>
      </div>
    <App2 />
    </div>
  );
}

export default App;
