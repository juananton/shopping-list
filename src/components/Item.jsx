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

const Item = ({ id, name, daysPerUnit, days, units, category, deleteItem }) => {
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

	const addUnit = () => {
		if (daysCount >= 0) {
			setDaysCount(daysCount + daysPerUnit);
		}
	};

	const removeUnit = () => {
		setDaysCount(daysCount - daysPerUnit);
	};

	const finishWarning = () => {
		if (daysCount === 0) {
			return 'error';
		} else if (daysCount <= 4) {
			return 'warning';
		}
	};

	const [modalContent, setModalContent] = useState({
		formDisplay: undefined,
		formTitle: '',
		formId: ''
	});

	const deleteModal = () => {
		setModalContent({
			formDisplay: (
				<DeleteForm
					name={name}
					id={id}
					deleteItem={deleteItem}
					closeModal={closeModal}
				/>
			),
			formTitle: 'Eliminar',
			formId: 'delete'
		});
	};

	const editModal = () => {
		setModalContent({
			formDisplay: <DeleteForm />,
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
				<Tag className='category'>{category}</Tag>
				<h2 className='name'>{name}</h2>
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
						<li onClick={editModal}>
							<FiEdit className='icon' />
							<span>Editar</span>
						</li>
						<li onClick={deleteModal}>
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
