import './App.css';
// import { useState } from 'react';


function App2() {

    // let [count, setCount] = useState(0)

    let text = `Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text ever 
            since the 1500s`

    return (
      <div className ='App2'>
        <h1>Frequently Asked Questions</h1>
        <details>
            <summary>Is this a good product?</summary>
            <p>{text}</p>
        </details>
        <details>
            <summary>How much does it cost</summary>
            <p>{text}</p>
        </details>
        <details>
            <summary>when can I get it</summary>
            <p>{text}</p>
        </details>
        <details>
            <summary>How many can I order</summary>
            <p>{text}</p>
        </details>
      </div>
    );
  }


export default App2;
