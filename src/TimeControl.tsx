import {useEffect, useState} from "react";

type Props = {
	decreaseSeconds: () => void;
	seconds: number;
}

export function TimeControl({decreaseSeconds, seconds}: Props) {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		let interval = null;
		interval = setInterval(() => {
			decreaseSeconds();
		}, 1000)
	}, [seconds]);


	const toggleTimer = () => {
		setIsActive(!isActive);
	};
	
	return (
		<div className={'timer-control'}>
			<button onClick={decreaseSeconds}> Start </button>
			<button> Pause </button>
			<button> Stop </button>
		</div>
	);
}