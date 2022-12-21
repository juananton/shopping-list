import React, { useContext } from 'react';
import ItemsContext from '../lib/context/ItemsContext';
import Item from './Item';

const ItemsList = () => {
	const { listData } = useContext(ItemsContext);

	if (listData.loading) return <p>Cargando datos...</p>;
	if (listData.error) return <p>Error al cargar los datos</p>;
	if (!listData.data.length)
		return <p>No tienes ningún alimento en la lista</p>;

	return listData.data.map(item => (
		<Item item={item} key={item.id} days={item.totalDays()} />
	));
};

export default ItemsList;
