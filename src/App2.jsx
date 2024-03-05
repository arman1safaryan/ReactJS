import './App.css';
import  {useState} from 'react';


export function App2() {
    let [mode, setMode] = useState('LightMode')

    return (
        <>
        {(mode === 'LightMode') ? (
            <div className='App'>
                <h1>React Light Mode</h1>
                <div><button onClick={() => setMode('DarkMode')}>Dark Mode</button></div>
            </div>) : (
            <div className='App AppDark'>
                <h1>React Dark Mode</h1>
                <div><button onClick={() => setMode('LightMode')}>Light Mode</button></div>
            </div>
            )}
        </>
    );
}

