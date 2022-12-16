import { useState } from 'react';
import ItemsList from './components/ItemsList';
import Modal from './components/Modal';
import './styles/css/index.css';

const ITEMS = [
	{
		id: 1,
		name: 'Queso',
		daysPerUnit: 7,
		units: 0
	},
	{
		id: 2,
		name: 'Aceite',
		daysPerUnit: 7,
		units: 0
	},
	{
		id: 3,
		name: 'Atún',
		daysPerUnit: 5,
		units: 0
	},
	{
		id: 4,
		name: 'Lentejas',
		daysPerUnit: 14,
		units: 0
	},
	{
		id: 5,
		name: 'Tostas de maíz',
		daysPerUnit: 7,
		units: 0
	}
];

ITEMS.forEach(item => {
	item.totalDays = () => {
		return Math.ceil(item.units * item.daysPerUnit);
	};
});

const App = () => {
	const [opened, setOpened] = useState(false);

	return (
		<div className='app'>
			{opened && (
				<Modal title='Nuevo alimento' closeModal={() => setOpened(false)}>
					<p>Modal form</p>
				</Modal>
			)}
			<ItemsList items={ITEMS} setOpened={setOpened} />
		</div>
	);
};
export default App;
