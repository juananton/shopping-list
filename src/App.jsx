import ItemsList from './components/ItemsList';
import './styles/css/index.css';

const ITEMS = [
	{
		id: 1,
		name: 'Queso',
		daysPerUnit: 7,
		units: 3
	},
	{
		id: 2,
		name: 'Aceite',
		daysPerUnit: 7,
		units: 2
	},
	{
		id: 3,
		name: 'Atún',
		daysPerUnit: 5,
		units: 6
	},
	{
		id: 4,
		name: 'Lentejas',
		daysPerUnit: 14,
		units: 3
	},
	{
		id: 5,
		name: 'Tostas de maíz',
		daysPerUnit: 7,
		units: 2
	}
];

ITEMS.forEach(item => {
	item.totalDays = () => {
		return Math.ceil(item.units * item.daysPerUnit);
	};
});

const App = () => (
	<div className='app'>
		<ItemsList items={ITEMS} />
	</div>
);
export default App;
