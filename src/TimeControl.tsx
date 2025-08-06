type Props = {
	decreaseSeconds: () => void;
}

export function TimeControl({decreaseSeconds}: Props) {
	
	const toggleTimer = () => {
	
	};
	
	return (
		<div className={'timer-control'}>
			<button onClick={decreaseSeconds}> Start </button>
			<button> Pause </button>
			<button> Stop </button>
		</div>
	);
}