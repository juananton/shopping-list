import { useState } from 'react';
import Button from './Button';
import CreateForm from './CreateForm';
import Modal from './Modal';

const Header = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className='header'>
			<Modal formTitle='Añadir' formId='create'>
				{showModal && <CreateForm setShowModal={setShowModal} />}
			</Modal>
			<h1>Despensa</h1>
			<Button use='primary' onClick={() => setShowModal(true)}>
				Añadir
			</Button>
		</div>
	);
};

export default Header;
