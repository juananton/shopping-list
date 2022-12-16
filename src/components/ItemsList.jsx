import { useState } from 'react';
import Button from './Button';
import CreationForm from './CreationForm';
import Item from './Item';
import Modal from './Modal';

const ItemsList = ({ items }) => {
	const [showModal, setShowModal] = useState(false);

	const itemsRendered =
		items.length > 0 ? (
			items.map(item => (
				<Item
					key={item.id}
					name={item.name}
					daysPerUnit={item.daysPerUnit}
					units={item.units}
					days={item.totalDays()}
				/>
			))
		) : (
			<p>No tienes ningún alimento en la lista</p>
		);

	const closeModal = () => setShowModal(false);

	return (
		<div className='items-list'>
			<Modal title='Nuevo alimento' closeModal={closeModal}>
				{showModal && <CreationForm closeModal={closeModal} />}
			</Modal>

			<div className='header'>
				<h1>Alimentos</h1>
				<Button use='primary' onClick={() => setShowModal(true)}>
					Añadir
				</Button>
			</div>
			{itemsRendered}
		</div>
	);
};

export default ItemsList;
