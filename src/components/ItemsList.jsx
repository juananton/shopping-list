import React from 'react';
import Item from './Item';

const ItemsList = ({ listData, setShowModal }) => {
	if (listData.loading) return <p>Cargando datos...</p>;
	if (listData.error) return <p>Error al cargar los datos</p>;
	if (!listData.data.length)
		return <p>No tienes ningún alimento en la lista</p>;

	return listData.data.map(item => (
		<Item
			key={item.id}
			name={item.name}
			category={item.category}
			daysPerUnit={item.daysPerUnit}
			units={item.units}
			days={item.totalDays()}
			setShowModal={setShowModal}
		/>
	));
};

export default ItemsList;
