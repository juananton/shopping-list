import ItemsList from './components/ItemsList';
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

const App = () => (
	<div className='app'>
		<ItemsList items={ITEMS} />
	</div>
);
export default App;
