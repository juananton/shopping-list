import Button from './Button';
import Item from './Item';

const ItemsList = ({ items, setOpened }) => {
	const itemsRendered =
		items.length > 0 ? (
			items.map(item => (
				<Item
					key={item.id}
					name={item.name}
					daysPerUnit={item.daysPerUnit}
					units={item.units}
					days={item.totalDays()}
				/>
			))
		) : (
			<p>No tienes ningún alimento en la lista</p>
		);
	return (
		<div className='items-list'>
			<div className='header'>
				<h1>Alimentos</h1>
				<Button use='primary' onClick={() => setOpened(true)}>
					Añadir
				</Button>
			</div>
			{itemsRendered}
		</div>
	);
};

export default ItemsList;
