import Item from './Item';

const ItemsList = ({ items }) => {
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
			<h1>Alimentos</h1>
			{itemsRendered}
		</div>
	);
};

export default ItemsList;
