import {useEffect, useState} from "react";

type Props = {
	totalSeconds: number;
	setTotalSeconds: (seconds: number) => void;
}

export function TimeControl({totalSeconds, setTotalSeconds}: Props) {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				if (totalSeconds <= 0) return;
				setTotalSeconds(totalSeconds - 1);
			}, 1000);
		}

		return() => {
			if (interval) clearInterval(interval);
		}

	}, [isActive, totalSeconds, setTotalSeconds]);


	const toggleTimer = () => {
		setIsActive(!isActive);
	};

	const stopTimer = () => {
		setIsActive(false);
		setTotalSeconds(0);
	}
	
	return (
		<div className={'timer-control'}>
			<button onClick={toggleTimer}> { isActive ? 'Pause' : 'Start' }</button>
			<button onClick={stopTimer}> Stop </button>
		</div>
	);
}