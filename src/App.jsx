import ItemsList from './components/ItemsList';
import { CATEGORIES } from './lib/constants';
import './styles/css/index.css';

const ITEMS = [
	{
		name: 'Queso',
		daysPerUnit: 7,
		units: 0,
		category: CATEGORIES.CAT1
	},
	{
		name: 'Aceite',
		daysPerUnit: 7,
		units: 0,
		category: CATEGORIES.CAT1
	},
	{
		name: 'Papel higiénico',
		daysPerUnit: 5,
		units: 6,
		category: CATEGORIES.CAT3
	},
	{
		name: 'Lentejas',
		daysPerUnit: 14,
		units: 0,
		category: CATEGORIES.CAT1
	},
	{
		name: 'Tostas de maíz',
		daysPerUnit: 7,
		units: 0,
		category: CATEGORIES.CAT1
	},
	{
		name: 'Pastillas lavavajillas',
		daysPerUnit: 25,
		units: 1,
		category: CATEGORIES.CAT2
	}
];

const App = () => {
	return (
		<div className='app'>
			<ItemsList items={ITEMS} />
		</div>
	);
};
export default App;
