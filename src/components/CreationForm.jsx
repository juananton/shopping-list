import Button from './Button';
import Input from './Input';
import Select from './Select';

const CreationForm = ({ closeModal }) => {
	return (
		<form className='creation-form'>
			<Input type='text' label='Nombre' />
			<Input type='text' label='Duración' />
			<Select label='Categoría'>
				<option value='1'>Categoría 1</option>
				<option value='2'>Categoría 2</option>
				<option value='3'>Categoría 2</option>
			</Select>
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
