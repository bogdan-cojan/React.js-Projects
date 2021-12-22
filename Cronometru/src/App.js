import React, {useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';
import './App.css';

function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [int, setInt] = useState();
  const [status, setStatus] = useState(0);

  const start = () => { run();
    setStatus(1);
  setInt(setInterval(run, 10));
  };

var updatedMs = time.ms;
var updatedS = time.s;
var updatedM = time.m;
var updatedH = time.h;

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }

    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }

    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }

    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };

  const stop = () => { clearInterval(int);
    setStatus(2);
    };

    const reset = () => { clearInterval(int);
      setStatus(0);
      setTime({ms:0, s:0, m:0, h:0});
      };

      const resume = () => start();

  return (
    <div className="App">
      <div className="clock-holder">
        <div className="stopwatch">
              <DisplayComponent time={time} />
              <BtnComponent status={status} stop={stop} resume={resume} reset={reset} start={start} />
          </div>
      </div>
    </div>
  );
}

export default App;