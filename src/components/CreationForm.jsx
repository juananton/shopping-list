import { useState } from 'react';
import { CATEGORIES } from '../lib/constants';
import Button from './Button';
import Input from './Input';
import Select from './Select';

CATEGORIES.map(i => console.log(i));

const CreationForm = ({ closeModal, addItem }) => {
	const [nameValue, setNameValue] = useState('');
	const [daysValue, setDaysValue] = useState(1);
	const [unitsValue, setUnitsValue] = useState(1);
	const [nameValidation, setNameValidation] = useState({
		message: '',
		error: false
	});
	const [categoryValue, setCategoryValue] = useState();

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
			daysPerUnit: daysValue,
			units: unitsValue,
			category: categoryValue
		};

		addItem(newItem);
		closeModal(true);
	};

	if (nameValidation.message && nameValue !== '') {
		setNameValidation({
			message: '',
			error: false
		});
	}
	return (
		<form className='creation-form' onSubmit={handleSubmit}>
			<Input
				type='text'
				label='Nombre'
				value={nameValue}
				onChange={e => setNameValue(e.target.value)}
				message={nameValidation.message}
				error={nameValidation.error}
				autoFocus
			/>
			<Select
				label='Categoría'
				value={categoryValue}
				onChange={e => setCategoryValue(e.target.value)}
			>
				{CATEGORIES.map(cat => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</Select>
			<Input
				type='number'
				label='Días por unidad'
				value={daysValue}
				min={1}
				onChange={e => setDaysValue(+e.target.value)}
			/>
			<Input
				type='number'
				label='Unidades'
				value={unitsValue}
				min={0}
				onChange={e => setUnitsValue(+e.target.value)}
			/>
			<div className='buttons'>
				<Button type='button' onClick={closeModal}>
					Cancelar
				</Button>
				<Button type='submit' use='primary'>
					Añadir
				</Button>
			</div>
		</form>
	);
};

export default CreationForm;
