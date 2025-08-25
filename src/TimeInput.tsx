type Props = {
	totalSeconds: number;
	setTotalSeconds: (seconds: number) => void;
}

export function TimerInput({totalSeconds, setTotalSeconds}: Props) {
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;
	
	const setTime = (h: number, m: number, s: number) => {
		if (h < 0 || m < 0 || s < 0) return;
		setTotalSeconds(h * 3600 + m * 60 + s);
	};
	
	return (
		<div className="timer-input">
			<div className="hours">
				<label>
					Hours:
					<input type="number" min="0" placeholder="HH" value={hours} onChange={e => setTime(Number(e.target.value), minutes, seconds)} />
					<div className={'controls'}>
						<button onClick={() => setTime(hours - 1, minutes, seconds)}>-</button>
						<button onClick={() => setTime(hours + 1, minutes, seconds)}>+</button>
					</div>
				</label>
			</div>
			<div className="minutes">
				<label>
					Minutes:
					<input type="number" min="0" max="59" value={minutes} placeholder="MM" onChange={e => setTime(hours, Number(e.target.value), seconds)} />
					<div className={'controls'}>
						<button onClick={() => setTime(hours, minutes - 1, seconds)}>-</button>
						<button onClick={() => setTime(hours, minutes + 1, seconds)}>+</button>
					</div>
				</label>
			</div>
			<div className="seconds">
				<label>
					Seconds:
					<input type="number" min="0" max="59" value={seconds} placeholder="SS" onChange={e => setTime(hours, minutes, Number(e.target.value))}/>
					<div className={'controls'}>
						<button onClick={() => setTime(hours, minutes, seconds - 1)}>-</button>
						<button onClick={() => setTime(hours, minutes, seconds + 1)}>+</button>
					</div>
				</label>
			</div>
		</div>
	);
}