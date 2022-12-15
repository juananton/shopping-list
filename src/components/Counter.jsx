import { useEffect, useState } from 'react';

const Counter = ({ items }) => {
	const [daysCount, setDaysCount] = useState(items[1].days);
	const units = Math.ceil(daysCount / items[1].daysPerUnit);

	useEffect(() => {
		if (daysCount > 0) {
			setTimeout(() => setDaysCount(daysCount - 1), 2000);
			console.log(daysCount);
		}
	}, [daysCount]);

	return (
		<div>
			Units: {units} Days: {daysCount}
		</div>
	);
};

export default Counter;
