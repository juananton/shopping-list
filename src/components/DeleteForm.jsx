import { useContext } from 'react';
import ItemsContext from '../lib/context/ItemsContext';
import Button from './Button';

const DeleteForm = ({ item, closeModal }) => {
	const { deleteItem } = useContext(ItemsContext);

	const handleSubmit = e => {
		e.preventDefault();

		deleteItem(item.id);
		closeModal(true);
	};

	return (
		<form className='delete-form' onSubmit={handleSubmit}>
			<p>
				¿Seguro que quieres eliminar el ítem {'"'}
				{item.name}
				{'"'}?
			</p>
			<div className='form-buttons'>
				<Button type='button' onClick={closeModal}>
					Cancelar
				</Button>
				<Button type='submit' use='primary'>
					Eliminar
				</Button>
			</div>
		</form>
	);
};

export default DeleteForm;
