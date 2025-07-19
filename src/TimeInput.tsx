import {useState} from "react";

export function TimerInput() {
	const [hours, setHours] = useState(0);
	
	return (
		<div className="timer-input">
			<div className="hours">
				<label>
					Hours:
					<input type="number" min="0" placeholder="HH" value={hours} onChange={e => setHours(Number(e.target.value))} />
					<div className={'controls'}>
						<button onClick={() => setHours(hours - 1)}>-</button>
						<button onClick={() => setHours(hours + 1)}>+</button>
					</div>
				</label>
			</div>
			<div className="minutes">
				<label>
					Minutes:
					<input type="number" min="0" max="59" placeholder="MM" />
				</label>
			</div>
			<div className="seconds">
				<label>
					Seconds:
					<input type="number" min="0" max="59" placeholder="SS" />
				</label>
			</div>
		</div>
	);
}