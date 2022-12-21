import Button from './Button';

const DeleteForm = ({ closeModal, name, id, deleteItem }) => {
	const handleSubmit = e => {
		e.preventDefault();

		deleteItem(id);
		closeModal(true);
	};

	return (
		<form className='delete-form' onSubmit={handleSubmit}>
			<p>
				¿Seguro que quieres eliminar el ítem {'"'}
				{name}
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
