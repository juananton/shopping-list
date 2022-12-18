import ItemsList from './components/ItemsList';
import './styles/css/index.css';

const ITEMS = [
	{
		name: 'Queso',
		daysPerUnit: 7,
		units: 0
	},
	{
		name: 'Aceite',
		daysPerUnit: 7,
		units: 0
	},
	{
		name: 'Atún',
		daysPerUnit: 5,
		units: 0
	},
	{
		name: 'Lentejas',
		daysPerUnit: 14,
		units: 0
	},
	{
		name: 'Tostas de maíz',
		daysPerUnit: 7,
		units: 0
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
