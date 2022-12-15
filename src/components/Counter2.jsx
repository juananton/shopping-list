import { useEffect, useState } from 'react';

const Counter2 = ({ items }) => {
	const [daysCount, setDaysCount] = useState(items[0].totalDays());
	const unitsCount = Math.ceil(daysCount / items[0].daysPerUnit);

	useEffect(() => {
		if (daysCount > 0) {
			setTimeout(() => setDaysCount(daysCount - 1), 2000);
			console.log(daysCount);
		}
	}, [daysCount]);

	return (
		<div>
			units: {unitsCount} days: {daysCount}
		</div>
	);
};

export default Counter2;
