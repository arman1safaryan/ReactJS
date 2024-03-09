import './App.css';
import  {useState} from 'react';


export function App2() {

    let [mode, setMode] = useState('showStart')
    let [timer, setTimer] = useState('false')
    let [second, setSecond] = useState(0)
    let [minute, setMinute] = useState(0)
    let [hour, setHour] = useState(0)


    function startFunc(){
        setTimer(true); 
        setMode('showStop');
        stopWatchProgress()
    }
    
    function stopFunc(){
        setTimer(false);
        setMode('showReset')
    }

    function resetFunc(){
        setMode('showStart')
        setHour(0); 
        setMinute(0); 
        setSecond(0); 
    }

    function resumeFunc(){
        setTimer(true);
        setMode('showStop')
    }

    
    function stopWatchProgress() { 
        if (timer) { 
            setSecond(second++); 
     
            if (second === 60) { 
                setMinute(minute++); 
                setSecond(0);
            } 
      
            if (minute === 60) { 
                setHour(hour++);
                setMinute(0); 
                setSecond(0); 
            } 
            setTimeout(stopWatchProgress, 1000); 
        } 
    }
  
    const start = <button class="btn" id="start" onClick={startFunc}> Start</button>
    const stop = <button class="btn" id="stop" onClick={stopFunc}> Stop</button>
    const reset = (
            <>
            <button class="btn" id="reset" onClick={resetFunc}> Reset </button>
            <button class="btn" id="resume" onClick={resumeFunc}> Resume </button>
            </>
        );

    return (
        <>
            <h1>Stopwatch</h1>
            <div id="time"> 
                <span class="digit" id="hr">{hour}:</span> 
                <span class="digit" id="min">{minute}:</span> 
                <span class="digit" id="sec">{second}</span> 
            </div> 
            <div className='App3'>
            {mode === 'showStart'? start: mode === 'showReset'? reset: stop}
            </div>
        </>
    );
}

