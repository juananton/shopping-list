import { useEffect, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import Button from './Button';

const Item = ({ name, daysPerUnit, days }) => {
	const [daysCount, setDaysCount] = useState(days);
	const [unitsCount, setUnitsCount] = useState(0);

	useEffect(() => {
		let daysTimeout = null;
		if (daysCount > 0) {
			daysTimeout = setTimeout(() => setDaysCount(daysCount - 1), 2000);
		}
		return () => {
			clearTimeout(daysTimeout);
		};
	}, [daysCount]);

	useEffect(() => {
		setUnitsCount(Math.ceil(daysCount / daysPerUnit));
	}, [daysCount, daysPerUnit]);

	const updateUnits = () =>
		setUnitsCount(Math.ceil((daysCount + daysPerUnit) / daysPerUnit));

	const addItem = () => {
		if (daysCount >= 0) {
			setDaysCount(daysCount + daysPerUnit);
			updateUnits();
		}
	};

	const removeItem = () => {
		setDaysCount(daysCount - daysPerUnit);
		updateUnits();
	};

	return (
		<div className='item'>
			<div className='wrapper'>
				<h2 className='name'>{name}</h2>
				<span className='days'>{`${daysCount} días`}</span>
			</div>
			<div className='units-controller'>
				<span className='units'>{`${unitsCount}`}</span>
				<Button onClick={removeItem} disabled={daysCount === 0}>
					<FiMinus className='icon' />
				</Button>
				<Button onClick={addItem}>
					<FiPlus className='icon' />
				</Button>
			</div>
		</div>
	);
};

export default Item;
