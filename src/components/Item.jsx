import { useEffect, useState } from 'react';
import {
	FiEdit,
	FiMinus,
	FiMoreVertical,
	FiPlus,
	FiTrash2
} from 'react-icons/fi';
import Button from './Button';
import Tag from './Tag';

const Item = ({ name, daysPerUnit, days, units, category }) => {
	const [daysCount, setDaysCount] = useState(days);
	const [unitsCount, setUnitsCount] = useState(units);
	const [actionsDropdown, setActionsDropdown] = useState(false);

	useEffect(() => {
		let daysTimeout = null;
		if (daysCount > 0) {
			daysTimeout = setTimeout(() => setDaysCount(daysCount - 1), 5000);
		} else if (daysCount < 0) {
			setDaysCount(0);
		}
		return () => {
			clearTimeout(daysTimeout);
		};
	}, [daysCount]);

	useEffect(() => {
		setUnitsCount(Math.ceil(daysCount / daysPerUnit));
	}, [daysCount, daysPerUnit]);

	const addItem = () => {
		if (daysCount >= 0) {
			setDaysCount(daysCount + daysPerUnit);
		}
	};

	const removeItem = () => {
		setDaysCount(daysCount - daysPerUnit);
	};

	const finishWarning = () => {
		if (daysCount === 0) {
			return 'error';
		} else if (daysCount <= 4) {
			return 'warning';
		}
	};

	const deleteItem = () => {
		setActionsDropdown(false);
	};

	const editItem = () => {
		setActionsDropdown(false);
	};

	return (
		<div className='item'>
			<div className='wrapper'>
				<Tag className='category'>{category}</Tag>
				<h2 className='name'>{name}</h2>
				<span className={`days ${finishWarning()}`}>
					{daysCount}
					<span>días</span>
				</span>
			</div>
			<div className='controls'>
				<span className={`units ${finishWarning()}`}>
					{unitsCount}
					{/* <span>uds.</span> */}
				</span>
				<Button onClick={removeItem} variant='icon' disabled={daysCount <= 0}>
					<FiMinus className='icon' />
				</Button>
				<Button onClick={addItem} variant='icon'>
					<FiPlus className='icon' />
				</Button>
				<Button
					onClick={() =>
						actionsDropdown
							? setActionsDropdown(false)
							: setActionsDropdown(true)
					}
					variant='icon'
					use='nobg'
				>
					<FiMoreVertical className='icon' />
				</Button>
				{actionsDropdown && (
					<ul className='dropdown'>
						<li onClick={editItem}>
							<FiEdit className='icon' />
							<span>Editar</span>
						</li>
						<li onClick={deleteItem}>
							<FiTrash2 className='icon' />
							<span>Eliminar</span>
						</li>
					</ul>
				)}
			</div>
		</div>
	);
};

export default Item;
