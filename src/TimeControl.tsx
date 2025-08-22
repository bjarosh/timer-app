import {useEffect, useState} from "react";

type Props = {
	decreaseSeconds: () => void;
	seconds: number;
}

export function TimeControl({decreaseSeconds, seconds}: Props) {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				decreaseSeconds();
			}, 1000);
		}

		return() => {
			if (interval) clearInterval(interval);
		}

	}, [isActive, decreaseSeconds]);


	const toggleTimer = () => {
		setIsActive(!isActive);
	};

	const stopTimer = () => {
		setIsActive(false);
		set
	}
	
	return (
		<div className={'timer-control'}>
			<button onClick={toggleTimer}> { isActive ? 'Pause' : 'Start' }</button>
			<button onClick={stopTimer}> Stop </button>
		</div>
	);
}