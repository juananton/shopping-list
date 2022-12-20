import { useState } from 'react';
import Button from './Button';
import CreateForm from './CreateForm';
import Modal from './Modal';

const Header = ({ addItem }) => {
	const [showModal, setShowModal] = useState(false);
	const closeModal = () => setShowModal(false);

	return (
		<div className='header'>
			<Modal formTitle='Añadir' closeModal={closeModal} formId='create'>
				{showModal && <CreateForm closeModal={closeModal} addItem={addItem} />}
			</Modal>
			<h1>Despensa</h1>
			<Button use='primary' onClick={() => setShowModal(true)}>
				Añadir
			</Button>
		</div>
	);
};

export default Header;
