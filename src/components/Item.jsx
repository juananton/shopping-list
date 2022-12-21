import { useEffect, useState } from 'react';
import {
	FiEdit,
	FiMinus,
	FiMoreVertical,
	FiPlus,
	FiTrash2
} from 'react-icons/fi';
import Button from './Button';
import DeleteForm from './DeleteForm';
import Modal from './Modal';
import Tag from './Tag';

const Item = ({ item, days }) => {
	const [daysCount, setDaysCount] = useState(days);
	const [unitsCount, setUnitsCount] = useState(item.units);
	const [actionsDropdown, setActionsDropdown] = useState(false);

	// Countdown logic

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
		setUnitsCount(Math.ceil(daysCount / item.daysPerUnit));
	}, [daysCount, item.daysPerUnit]);

	const finishWarning = () => {
		if (daysCount === 0) {
			return 'error';
		} else if (daysCount <= 4) {
			return 'warning';
		}
	};

	// Add and remove unit logic
	const addUnit = () => {
		if (daysCount >= 0) {
			setDaysCount(daysCount + item.daysPerUnit);
		}
	};

	const removeUnit = () => {
		setDaysCount(daysCount - item.daysPerUnit);
	};

	// Access edit and delete item forms

	const [modalContent, setModalContent] = useState({
		formDisplay: undefined,
		formTitle: '',
		formId: ''
	});

	const showDeleteModal = () => {
		setModalContent({
			formDisplay: <DeleteForm item={item} closeModal={closeModal} />,
			formTitle: 'Eliminar',
			formId: 'delete'
		});
	};

	const showEditModal = () => {
		setModalContent({
			formDisplay: <DeleteForm item={item} closeModal={closeModal} />,
			formTitle: 'Editar',
			formId: 'edit'
		});
	};

	const closeModal = () => setModalContent(false);

	return (
		<div className='item'>
			<Modal
				formTitle={modalContent.formTitle}
				formId={modalContent.formId}
				closeModal={closeModal}
			>
				{modalContent.formDisplay}
			</Modal>
			<div className='wrapper'>
				<Tag className='category'>{item.category}</Tag>
				<h2 className='name'>{item.name}</h2>
				<span className={`days ${finishWarning()}`}>
					{daysCount}
					<span>días</span>
				</span>
			</div>
			<div className='controls'>
				<span className={`units ${finishWarning()}`}>{unitsCount}</span>
				<Button onClick={removeUnit} variant='icon' disabled={daysCount <= 0}>
					<FiMinus className='icon' />
				</Button>
				<Button onClick={addUnit} variant='icon'>
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
					<ul className='dropdown' onClick={() => setActionsDropdown(false)}>
						<li onClick={showEditModal}>
							<FiEdit className='icon' />
							<span>Editar</span>
						</li>
						<li onClick={showDeleteModal}>
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
