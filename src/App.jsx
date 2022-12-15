import ItemsList from './components/ItemsList';
import './styles/css/index.css';

function totalDays() {
	return Math.ceil(this.units * this.daysPerUnit);
}

const ITEMS = [
	{
		id: 1,
		name: 'Queso',
		daysPerUnit: 7,
		units: 1,
		totalDays
	},
	{
		id: 2,
		name: 'Aceite',
		daysPerUnit: 14,
		units: 2,
		totalDays
	},
	{
		id: 3,
		name: 'Atún',
		daysPerUnit: 5,
		units: 6,
		totalDays
	},
	{
		id: 4,
		name: 'Lentejas',
		daysPerUnit: 14,
		units: 3,
		totalDays
	},
	{
		id: 5,
		name: 'Tostas de maíz',
		daysPerUnit: 7,
		units: 2,
		totalDays
	}
];

const App = () => (
	<div className='app'>
		<ItemsList items={ITEMS} />
	</div>
);
export default App;
