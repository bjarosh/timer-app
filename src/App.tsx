import './App.css'
import './TimeInput.tsx'
import './TimeControl.tsx'
import {TimerInput} from "./TimeInput.tsx";
import {TimeControl} from "./TimeControl.tsx";
import {useState} from "react";

function App() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  

  return (
    <>
      <div className={'timer'}>
        <TimerInput
          totalSeconds={totalSeconds}
          setTotalSeconds={setTotalSeconds}
        />
        <TimeControl
          totalSeconds={totalSeconds}
          setTotalSeconds={setTotalSeconds}
        />
      </div>
    </>
  )
}

export default App
