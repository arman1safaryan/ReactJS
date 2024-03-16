import './App.css';
import  {useState, useEffect} from 'react';


export function App2() {
    let [mode, setMode] = useState(
        JSON.parse(localStorage.getItem("mode"))? JSON.parse(localStorage.getItem("mode")) : "white")

    const click = color => {
        setMode(color)
    }

    useEffect(() => {
        document.body.style.backgroundColor = mode
        localStorage.setItem("mode", JSON.stringify(mode))
    },[mode])


    return (
        <>
        {mode === "white" && (
            <div className='App'>
            <h1>React Light Mode</h1>
            <div><button onClick={() => click("black")}>Dark Mode</button></div>
        </div>
        )}
        {mode === "black" && (
            <div className=' App DarkMode'>
            <h1>React Dark Mode</h1>
            <div><button onClick={() => click("white")}>Dark Mode</button></div>
        </div>
        )}
        </>
    );
}

