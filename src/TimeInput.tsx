type Props = {
	hours: number;
	minutes: number;
	seconds: number;
	setSeconds: (seconds: number) => void;
	setMinutes: (minutes: number) => void;
	setHours: (hours: number) => void;
	increaseHours: () => void;
	decreaseHours: () => void;
	increaseMinutes: () => void;
	decreaseMinutes: () => void;
	increaseSeconds: () => void;
	decreaseSeconds: () => void;
}

export function TimerInput({hours, minutes, seconds, setSeconds, setMinutes, setHours, increaseHours, decreaseHours, increaseMinutes, decreaseMinutes, increaseSeconds, decreaseSeconds}: Props) {
	
	
	return (
		<div className="timer-input">
			<div className="hours">
				<label>
					Hours:
					<input type="number" min="0" placeholder="HH" value={hours} onChange={e => setHours(Number(e.target.value))} />
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