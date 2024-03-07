import './App.css';
import  {useState} from 'react';


let hour = '00'; 
let minute = '00'; 
let second = '00'; 
let count = '00'; 



let timer = false

export function App2() {

    const start = <button class="btn" id="start" onClick={startFunc}> Start</button>

    const reset = `<button class="btn" id="reset"> Start</button>
            <button class="btn" id="resume"> Start</button>`

    const stop = <button class="btn" id="stop" onClick={stopFunc}> Stop</button>

    let [mode, setMode] = useState('Start')

    function startFunc(){
        timer = true; 
        setMode('Stop')
        stopWatch()
    }
    
    function stopFunc(){
        timer = false; 
        setMode('Start')
        stopWatch()
    }

    function stopWatch() { 
        if (timer) { 
            count++; 
      
            if (count == 100) { 
                second++; 
                count = 0; 
            } 
      
            if (second == 60) { 
                minute++; 
                second = 0; 
            } 
      
            if (minute == 60) { 
                hour++; 
                minute = 0; 
                second = 0; 
            } 
      
            let hrString = hour; 
            let minString = minute; 
            let secString = second; 
            let countString = count; 
      
            if (hour < 10) { 
                hrString = "0" + hrString; 
            } 
      
            if (minute < 10) { 
                minString = "0" + minString; 
            } 
      
            if (second < 10) { 
                secString = "0" + secString; 
            } 
      
            if (count < 10) { 
                countString = "0" + countString; 
            } 
      
            document.getElementById('hr').innerHTML = hrString; 
            document.getElementById('min').innerHTML = minString; 
            document.getElementById('sec').innerHTML = secString; 
            document.getElementById('count').innerHTML = countString; 
            setTimeout(stopWatch, 10); 
        } 
    }


    const renderSwitch = (param) => {
        switch(mode) {
            case 'Start':
              return start;
            case 'Reset':
              return reset;
            case 'Stop':
            return stop;
          }
    }

    return (
        <>
            <h1>Stopwatch</h1>
            <div id="time"> 
                <span class="digit" id="hr"> 
                    {hour}</span> 
                <span class="txt">:</span> 
                <span class="digit" id="min"> 
                    {minute}</span> 
                <span class="txt">:</span> 
                <span class="digit" id="sec"> 
                    {second}</span> 
                <span class="txt">:</span> 
                <span class="digit" id="count"> 
                    {count}</span> 
            </div> 
            <div className='App'>
                {renderSwitch(mode)}
            </div>
        </>
    );
}

