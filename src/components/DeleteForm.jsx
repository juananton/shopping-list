const DeleteForm = ({ closeModal, addItem }) => {
	const handleSubmit = e => {
		e.preventDefault();

		const newItem = {
			name: nameValue,
			daysPerUnit: daysPerUnitValue,
			units: unitsValue,
			category: categoryValue
		};

		addItem(newItem);
		closeModal(true);
	};

	return (
		<form className='delete-form' onSubmit={handleSubmit}>
			<p>Seguro que quieres eliminar este ítem </p>
		</form>
	);
};

export default DeleteForm;
