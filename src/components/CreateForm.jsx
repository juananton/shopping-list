import { useState } from 'react';
import { CATEGORIES } from '../lib/constants';
import Input from './Input';
import Select from './Select';

const CreateForm = ({ closeModal, addItem }) => {
	const [nameValue, setNameValue] = useState('');
	const [daysPerUnitValue, setDaysPerUnitValue] = useState(1);
	const [unitsValue, setUnitsValue] = useState(1);
	const [categoryValue, setCategoryValue] = useState(CATEGORIES.CAT1);
	const [nameValidation, setNameValidation] = useState({
		message: '',
		error: false
	});

	const handleSubmit = e => {
		e.preventDefault();

		if (!nameValue) {
			setNameValidation({
				message: 'El campo de nombre no puede quedar vacío.',
				error: true
			});
			return;
		}

		const newItem = {
			name: nameValue,
			daysPerUnit: daysPerUnitValue,
			units: unitsValue,
			category: categoryValue
		};

		addItem(newItem);
		closeModal(true);
	};

	const handleNameChange = e => {
		if (nameValue.length >= 0 && nameValue.length < 25) {
			setNameValidation({
				message: '',
				error: false
			});
		} else {
			setNameValidation({
				message: 'El nombre debe tener menos de 20 caracteres',
				error: true
			});
		}

		setNameValue(e.target.value);
	};

	return (
		<form className='create-form' onSubmit={handleSubmit} id='create'>
			<Input
				type='text'
				label='Nombre'
				value={nameValue}
				onChange={handleNameChange}
				message={nameValidation.message}
				error={nameValidation.error}
				autoFocus
			/>
			<Select
				label='Categoría'
				value={categoryValue}
				onChange={e => {
					setCategoryValue(e.target.value);
				}}
			>
				{Object.values(CATEGORIES).map(cat => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</Select>
			<Input
				type='number'
				label='Días por unidad'
				value={daysPerUnitValue}
				min={1}
				onChange={e => setDaysPerUnitValue(+e.target.value)}
			/>
			<Input
				type='number'
				label='Unidades'
				value={unitsValue}
				min={0}
				onChange={e => setUnitsValue(+e.target.value)}
			/>
		</form>
	);
};

export default CreateForm;
