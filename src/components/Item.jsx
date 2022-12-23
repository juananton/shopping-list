import { useContext, useEffect, useRef, useState } from 'react';
import {
	FiEdit,
	FiMinus,
	FiMoreVertical,
	FiPlus,
	FiTrash2
} from 'react-icons/fi';
import ItemsContext from '../lib/context/ItemsContext';
import Button from './Button';
import DeleteForm from './DeleteForm';
import EditForm from './EditForm';
import Modal from './Modal';
import Tag from './Tag';

const Item = ({ item, days }) => {
	const [daysCount, setDaysCount] = useState(days);
	const [unitsCount, setUnitsCount] = useState(item.units);

	const { updateItem } = useContext(ItemsContext);

	const updatedItem = {
		units: unitsCount,
		id: item.id
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

	// Calculate days
	useEffect(() => {
		setDaysCount(unitsCount * item.daysPerUnit);
	}, [unitsCount, item.daysPerUnit]);

	// Calculate units
	useEffect(() => {
		setUnitsCount(Math.ceil(daysCount / item.daysPerUnit));
	}, [daysCount, item.daysPerUnit]);

	// Countdown logic
	useEffect(() => {
		let daysTimeout = null;
		if (daysCount > 0) {
			daysTimeout = setTimeout(() => {
				setDaysCount(daysCount - 1);
			}, 50000);
		} else if (unitsCount === 0) {
			setDaysCount(0);
		}
		return () => {
			clearTimeout(daysTimeout);
		};
	}, [daysCount, unitsCount]);

	const finishWarning = () => {
		if (daysCount === 0) {
			return 'error';
		} else if (daysCount <= 4) {
			return 'warning';
		}
	};

	// Fetch every x secs the updated item
	useEffect(() => {
		let fetchTimeout = null;
		if (unitsCount > 0) {
			fetchTimeout = setTimeout(() => {
				updateItem(updatedItem);
			}, 5000);
		}

		return () => {
			clearTimeout(fetchTimeout);
		};
	}, [unitsCount, updatedItem]);

	// Actions dropdown
	const [dropdownOpened, setDropdownOpened] = useState(false);
	const dropdownRef = useRef(null);

	const openDropdown = () => setDropdownOpened(true);
	const closeDropdown = () => setDropdownOpened(false);

	useEffect(() => {
		if (!dropdownOpened) return;

		console.log(dropdownRef);

		const handleClickOutside = e => {
			!dropdownRef.current.contains(e.target) && closeDropdown();
		};

		document.addEventListener('click', handleClickOutside, {
			capture: true
		});
		return () =>
			document.removeEventListener('click', handleClickOutside, {
				capture: true
			});
	}, [dropdownOpened]);

	// Access edit and delete item forms
	const [modalContent, setModalContent] = useState({
		formDisplay: undefined,
		formTitle: ''
	});

	const showDeleteModal = () => {
		setModalContent({
			formDisplay: <DeleteForm item={item} closeModal={closeModal} />,
			formTitle: 'Eliminar'
		});
	};

	const showEditModal = () => {
		setModalContent({
			formDisplay: <EditForm item={item} closeModal={closeModal} />,
			formTitle: 'Editar'
		});
	};

	const closeModal = () => setModalContent(false);

	return (
		<div className='item'>
			<Modal formTitle={modalContent.formTitle} closeModal={closeModal}>
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
				<Button onClick={openDropdown} variant='icon' use='nobg'>
					<FiMoreVertical className='icon' />
				</Button>
				{dropdownOpened && (
					<ul ref={dropdownRef} className='dropdown'>
						<li
							onClick={() => {
								showEditModal();
								closeDropdown();
							}}
						>
							<FiEdit className='icon' />
							<span>Editar</span>
						</li>
						<li
							onClick={() => {
								showDeleteModal();
								closeDropdown();
							}}
						>
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
