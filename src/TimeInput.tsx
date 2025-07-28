import {useState} from "react";

export function TimerInput() {
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
	
	return (
		<div className="timer-input">
			<div className="hours">
				<label>
					Hours:
					<input
						type="number"
						min="0"
						placeholder="HH"
						value={hours}
						onChange={e => setHours(Number(e.target.value))} />
					<div className={'controls'}>
						<button onClick={decreaseHours}>-</button>
						<button onClick={increaseHours}>+</button>
					</div>
				</label>
			</div>
			<div className="minutes">
				<label>
					Minutes:
					<input type="number" min="0" max="59" value={minutes} placeholder="MM" onChange={e => setMinutes(Number(e.target.value))} />
					<div className={'controls'}>
						<button onClick={decreaseMinutes}>-</button>
						<button onClick={increaseMinutes}>+</button>
					</div>
				</label>
			</div>
			<div className="seconds">
				<label>
					Seconds:
					<input type="number" min="0" max="59" value={seconds} placeholder="SS" onChange={e => setSeconds(Number(e.target.value))}/>
					<div className={'controls'}>
						<button onClick={decreaseSeconds}>-</button>
						<button onClick={increaseSeconds}>+</button>
					</div>
				</label>
			</div>
		</div>
	);
}