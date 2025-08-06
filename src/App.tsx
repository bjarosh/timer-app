import './App.css'
import './TimeInput.tsx'
import './TimeControl.tsx'
import {TimerInput} from "./TimeInput.tsx";
import {TimeControl} from "./TimeControl.tsx";
import {useState} from "react";

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  const decreaseHours = () => {
    if (hours > 0) {
      setHours(hours - 1);
    }
  };
  
  const increaseHours = () => {
    setHours(hours + 1);
  }
  
  const decreaseMinutes = () => {
    if (minutes > 0) {
      setMinutes(minutes - 1);
    }
    else {
      decreaseHours();
      setMinutes(59);
    }
  }
  
  const increaseMinutes = () => {
    if (minutes < 59) {
      setMinutes(minutes + 1);
    }
    else {
      increaseHours();
      setMinutes(0);
    }
  }
  
  const decreaseSeconds = () => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    }
    else {
      decreaseMinutes();
      setSeconds(59);
    }
  }
  
  const increaseSeconds = () => {
    if (seconds < 59) {
      setSeconds(seconds + 1);
    }
    else {
      increaseMinutes();
      setSeconds(0);
    }
  }
  
  /*useEffect(() => {
    const interval = setInterval(() => {
    
    });
  })*/
  
  
  return (
    <>
      <div className={'timer'}>
        <TimerInput
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          setSeconds={setSeconds}
          setMinutes={setMinutes}
          setHours={setHours}
          increaseHours={increaseHours}
          decreaseHours={decreaseHours}
          increaseMinutes={increaseMinutes}
          decreaseMinutes={decreaseMinutes}
          increaseSeconds={increaseSeconds}
          decreaseSeconds={decreaseSeconds}
        />
        <TimeControl
          decreaseSeconds={decreaseSeconds}
        />
      </div>
    </>
  )
}

export default App
