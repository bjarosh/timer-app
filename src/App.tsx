import './App.css'
import './TimeInput.tsx'
import './TimeControl.tsx'
import {TimerInput} from "./TimeInput.tsx";
import {TimeControl} from "./TimeControl.tsx";

function App() {
  
  return (
    <>
      <div className={'timer'}>
        <TimerInput/>
        <TimeControl/>
      </div>
    </>
  )
}

export default App
